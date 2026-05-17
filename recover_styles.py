import sys, re

log_path = r'C:\Users\Feli\.gemini\antigravity\brain\1cb26f17-a3ed-4e78-a485-984fad76a307\.system_generated\logs\overview.txt'
try:
    with open(log_path, 'r', encoding='utf-8') as f:
        text = f.read()
except FileNotFoundError:
    print("Log file not found.")
    sys.exit(1)

lines = text.split('\n')
out_lines = {}
capture = False
for line in lines:
    if 'File Path: `file:///c:/Users/Feli/Documents/New%20project/pasquta-landing/styles.css`' in line:
        capture = True
    if 'The above content' in line:
        capture = False
    
    if capture:
        match = re.match(r'^(\d+): (.*)$', line)
        if match:
            num = int(match.group(1))
            content = match.group(2)
            out_lines[num] = content

if not out_lines:
    print("No lines found.")
    sys.exit(1)

with open(r'c:\Users\Feli\Documents\New project\pasquta-landing\styles.css', 'w', encoding='utf-8') as f:
    for i in range(1, max(out_lines.keys()) + 1):
        f.write(out_lines.get(i, '') + '\n')

print(f'Recovered {len(out_lines)} lines')
