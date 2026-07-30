import glob, os

src = r'C:\Users\Administrator\.accio\accounts\1749599965\agents\DID-F456DA-52F456DAU1778730-3578-B16636\project\senhong-streetwear\src'
files = glob.glob(src + '/**/*.jsx', recursive=True)
files = [f for f in files if 'node_modules' not in f]

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content
    content = content.replace("'assets/images/", "'/assets/images/")
    content = content.replace('"assets/images/', '"/assets/images/')
    content = content.replace('//assets/', '/assets/')
    if content != original:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Fixed: {os.path.basename(fpath)}')
print('Done')
