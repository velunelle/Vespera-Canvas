# Vespera Canvas · 雪晶效果库（SN-001 / SN-002）

两种独立的动态雪晶特效，依据用户提供的两段视频制作，**没有直接截取原视频雪花图形、音频或创作者水印**，雪花均由 JavaScript 程序化绘制。

| 编号 | 中文名称 | 参考视频 | 视觉与运动目标 | 可直接使用 |
|---|---|---|---|---|
| SN-001 | 冰蓝星辉 | `1000215481.mp4` | 近黑色夜空、冷蓝发光六角雪晶、柔和光点、缓慢漂浮 | `standalone/blue-glow.html` |
| SN-002 | 雪晶穿梭 | `1000215482.mp4` | 纯黑背景、大量白色六角冰晶、中心大雪晶、明显透视纵深与穿梭感 | `standalone/white-tunnel.html` |

## 怎么用

- 直接打开项目根目录 `index.html`，选择效果。两个 `standalone/*.html` 是**离线可直接运行的单文件 HTML**，各自已经包含渲染引擎，不依赖 CDN/字体/外部图片。
- 想放进自己的网页，复制 `src/snow-engine.js` 后在页面中写 `<canvas id="snow"></canvas>`，再调用：

```html
<script src="snow-engine.js"></script>
<script>
  const snow = VesperaSnow.mount(document.querySelector('#snow'), {
    mode: 'blue-glow',  // 或 'white-tunnel'
    seed: 20261108,
    density: 1,
    speed: 1
  });
  // 页面卸载或不再需要时：snow.destroy()
</script>
```

`density` 控制雪花数量（建议 0.3～2），`speed` 控制整体运动速度（0.2～2.5）。通过 `snow.setOptions({speed: 0.8})` 可以动态修改。代码检测 `prefers-reduced-motion`，遇到减少动画偏好会静止展示画面。切到后台会暂停渲染，返回后继续。自动适配设备像素比与手机竖屏。

## 文件说明

- `index.html`：效果选择页，预览视频已经打包；真实动效在单独页面中播放。
- `standalone/blue-glow.html`：SN-001 完整独立版。
- `standalone/white-tunnel.html`：SN-002 完整独立版。
- `src/snow-engine.js`：可以复用的渲染引擎。
- `src/*.template.html`：单文件构建模板。
- `previews/*.mp4`：从运行中的浏览器实录得到的动画预览，不是原视频。
- `previews/*.png`：桌面及手机视口截图。
- `tests/visual_check.py`、`tests/record_preview.py`：本次模拟浏览器验收与录屏脚本。

## 已核实、待核实

- 已在 Chromium 中执行两个 HTML，1280×720 桌面和 393×852 手机尺寸（2×设备像素比）均可渲染，没有脚本异常、画布尺寸正确、没有横向溢出。
- 已自动录制两段动画视频，检查不同时间帧的图像确实不同，不是静态截图。
- 没有做真实安卓/iOS 手机的长期帧率、耗电和后台恢复实机测试；不能据此保证所有设备稳定 60fps。
- 因为没有原作雪晶素材、渲染器和动态参数，这是一套**接近视觉目标的原创重绘**，不能宣称是原作者代码或逐帧一比一复制。

版本 `1.0.0`，只针对两个参考特效，未擅自加入页面切换或其他动画。