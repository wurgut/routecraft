import zipfile
import xml.etree.ElementTree as ET
import sys

def extract(path):
    with zipfile.ZipFile(path) as d:
        tree = ET.fromstring(d.read('word/document.xml'))
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        text = []
        for p in tree.findall('.//w:p', ns):
            p_text = ''.join([t.text for t in p.findall('.//w:t', ns) if t.text])
            if p_text:
                text.append(p_text)
        return '\n'.join(text)

if __name__ == '__main__':
    print(extract(sys.argv[1]))
