---
title: input accept
date: 2020-03-05
tags:
 - input
categories:
 - html
---
### input accept属性限制文件上传格式

1. 上传.csv格式的&emsp;<input type="file" accept=".csv" />
```
<input type="file" accept=".csv" />
```
2. 上传.xls格式&emsp;<input type="file"  accept="application/vnd.ms-excel"/>
```
<input type="file"  accept="application/vnd.ms-excel"/>
```

3. 上传.xslx格式&emsp;<input type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"/>
```
<input type="file" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"/>
```
4. 上传.png/.jpg/etc格式&emsp;<input type="file" accept="type/plain" />
```
<input type="file" accept="type/plain" />
```

5. 上传图片格式&emsp;<input type="file" accept="image/*" />
```
<input type="file" accept="image/*" />
```

6. 上传.htm,.html格式&emsp;<input type="file" accept="type/html" />
```
<input type="file" accept="type/html" />
```

7. 上传video(.avi, .mpg, .mpeg, .mp4)格式&emsp;<input type="file" accept="video/*" />
```
<input type="file" accept="video/*" />
```

8. 上传audio(.mp3, .wav, etc)格式&emsp;<input type="file" accept="audio/*" />
```
<input type="file" accept="audio/*" />
```

9. 上传.pdf格式&emsp;<input type="file" accept=".pdf" />
```
<input type="file" accept=".pdf" />
```

10. 如果限制多种文件格式,请使用逗号分隔&emsp;<input type="file" accept="audio/*,video/*,image/*">
```
<input type="file" accept="audio/*,video/*,image/*" >
```
