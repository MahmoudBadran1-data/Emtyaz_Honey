import http.server
import socketserver
import json
import os
import sys
import urllib.parse
from datetime import datetime

# Configure UTF-8 for console output if supported
if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

PORT = 5050
DATA_DIR = os.path.join(os.path.dirname(__file__), 'data')
DEV_MSGS_FILE = os.path.join(DATA_DIR, 'dev_messages.json')
ORDERS_FILE = os.path.join(DATA_DIR, 'orders.json')

# Ensure directories and files exist
if not os.path.exists(DATA_DIR):
    os.makedirs(DATA_DIR, exist_ok=True)

if not os.path.exists(DEV_MSGS_FILE):
    with open(DEV_MSGS_FILE, 'w', encoding='utf-8') as f:
        json.dump([], f, ensure_ascii=False, indent=2)

if not os.path.exists(ORDERS_FILE):
    with open(ORDERS_FILE, 'w', encoding='utf-8') as f:
        json.dump([], f, ensure_ascii=False, indent=2)

class StoreRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        
        # API: Get dev messages
        if parsed.path == '/api/dev-messages':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            try:
                with open(DEV_MSGS_FILE, 'r', encoding='utf-8') as f:
                    data = f.read()
                self.wfile.write(data.encode('utf-8'))
            except Exception:
                self.wfile.write(json.dumps([]).encode('utf-8'))
            return

        # API: Get orders
        if parsed.path == '/api/orders':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            try:
                with open(ORDERS_FILE, 'r', encoding='utf-8') as f:
                    data = f.read()
                self.wfile.write(data.encode('utf-8'))
            except Exception:
                self.wfile.write(json.dumps([]).encode('utf-8'))
            return

        # Serve static files as usual
        super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length).decode('utf-8', errors='replace')
        
        try:
            payload = json.loads(body) if body else {}
        except Exception:
            payload = {}

        # API: Save message to developer database
        if parsed.path == '/api/dev-contact':
            try:
                with open(DEV_MSGS_FILE, 'r', encoding='utf-8') as f:
                    messages = json.load(f)
            except Exception:
                messages = []

            new_msg = {
                'id': 'MSG-' + datetime.now().strftime('%y%m%d%H%M%S'),
                'timestamp': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                'date': datetime.now().strftime('%d/%m/%Y %I:%M %p'),
                'sender_name': payload.get('name') or payload.get('sender_name') or 'زائر المتجر',
                'sender_contact': payload.get('contact') or payload.get('sender_contact') or '',
                'subject': payload.get('subject') or 'رسالة استفسار للمطور',
                'message': payload.get('message') or payload.get('body') or '',
                'ip': self.client_address[0]
            }

            messages.insert(0, new_msg)

            with open(DEV_MSGS_FILE, 'w', encoding='utf-8') as f:
                json.dump(messages, f, ensure_ascii=False, indent=2)

            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            resp = json.dumps({'status': 'success', 'message': 'تم حفظ الرسالة في قاعدة البيانات بنجاح', 'data': new_msg}, ensure_ascii=False)
            self.wfile.write(resp.encode('utf-8'))
            print(f"[DB] New developer message from: {new_msg['sender_name']}")
            return

        # API: Save order to orders database
        if parsed.path == '/api/orders':
            try:
                with open(ORDERS_FILE, 'r', encoding='utf-8') as f:
                    orders = json.load(f)
            except Exception:
                orders = []

            payload['saved_at'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            orders.insert(0, payload)

            with open(ORDERS_FILE, 'w', encoding='utf-8') as f:
                json.dump(orders, f, ensure_ascii=False, indent=2)

            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()
            resp = json.dumps({'status': 'success', 'message': 'تم تسجيل الطلب في قاعدة البيانات بنجاح'}, ensure_ascii=False)
            self.wfile.write(resp.encode('utf-8'))
            print(f"[DB] New order recorded: {payload.get('id', 'N/A')}")
            return

        self.send_response(404)
        self.end_headers()

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(('0.0.0.0', PORT), StoreRequestHandler) as httpd:
        print("=" * 60)
        print("EMTIAZ HONEY STORE SERVER RUNNING:")
        print(f"Local URL:   http://localhost:{PORT}")
        print(f"Network URL: http://192.168.1.45:{PORT}")
        print(f"Admin Panel: http://localhost:{PORT}/admin.html")
        print("=" * 60)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("Server stopped.")
