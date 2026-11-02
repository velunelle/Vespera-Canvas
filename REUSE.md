# 复用开发备忘

## M-001 发牌翻面（优先）

原始代码：`sources/witches-banquet/opening/opening.css`。

1. 外层卡片 `.opening-card` 执行 `deal`（1.05 秒），右卡比左卡晚 0.13 秒出场。
2. 内层 `.flip` 执行 `card-flip`（0.85 秒），左卡延后 0.9 秒、右卡延后 1.12 秒开始翻。
3. `.opening-deck` 使用 `perspective: 1000px`，`.flip` 使用 `transform-style: preserve-3d`，正反面使用 `backface-visibility:hidden`。正面先转 `180deg`，卡片翻转后才出现。
4. 独立示例在 `components/card-flip/index.html`，素材使用占位图形，保留原版关键动画参数。

## M-005 手势退场

已在本库保存 `sources/witches-banquet/opening/opening.js` 与 `sources/witches-banquet/parent/motion.js` 两份源文件。前者把拖动距离转换为进度；后者让整个 iframe 上移、透明度降低并显示下一层页面。不是只复制 CSS 就能用。

## M-006 贴纸与星星

`sticker-float` 为 3 秒循环，居中态向上 9px；`twinkle` 为 1.9 秒循环，透明度和缩放有小幅变化。

## 不要混淆

M-003 开场卡片倾斜不等于持续漂浮，主游戏另一套角色卡才含鼠标跟随。M-004 是入口触发逻辑，不等于有特别设计的按钮弹跳效果。
