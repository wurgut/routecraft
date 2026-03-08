import re
import json

with open('tests/data-integrity.test.js', 'r', encoding='utf-8') as f:
    js = f.read()

js = js.replace("return array of 11 ideas", "return array of 13 ideas")
js = js.replace("assert.strictEqual(ideas.length, 11", "assert.strictEqual(ideas.length, 13")
js = js.replace("expected 11, got ' + ideas.length", "expected 13, got ' + ideas.length")

with open('tests/data-integrity.test.js', 'w', encoding='utf-8') as f:
    f.write(js)

print("Quick ideas test assertion patched.")
