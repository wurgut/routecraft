import zipfile, re
with open('docx_content.txt', 'w', encoding='utf-8') as out:
    with zipfile.ZipFile(r'C:\Users\dragos\Downloads\Velo-X_UX_Framework_v2.docx') as d:
        for name in d.namelist():
            if name.startswith('word/') and name.endswith('.xml'):
                xml = d.read(name).decode('utf-8')
                text = re.sub(r'<[^>]+>', ' ', xml)
                text = re.sub(r'\s+', ' ', text).strip()
                if text:
                    out.write(f"--- {name} ---\n{text}\n\n")
