# SN-002 · 版本比较与归档（待用户审定）

创建日期：2026-11-08。状态：**尚未完成最终审美验收。**

在线版本对照与批注：https://vespera-canvas-sn002.vercel.app/compare/

当前实验版：https://vespera-canvas-sn002.vercel.app/

## 现存版本台账

本目录现有 13 个历史版本。v1.8 已按用户明确要求从当前文件目录删除，Git 历史仍可追溯。

| 版本 | 源文件 | 在线打开 | 已知特点/反馈 | 当前状态 |
|---|---|---|---|---|
| v1.0 | [v1.0.0-original.html](versions/v1.0.0-original.html) | [试玩](https://vespera-canvas-sn002.vercel.app/api/version?v=v1.0) | 原版透视穿梭与早期慢镜头；晶体质感粗糙 | 待比较 |
| v1.1 | [v1.1.0-cold-fog.html](versions/v1.1.0-cold-fog.html) | [试玩](https://vespera-canvas-sn002.vercel.app/api/version?v=v1.1) | 旧版运动、蓝色冷雾；雾气结构可借鉴，蓝色调不采纳 | 低优先级 |
| v1.2 | [v1.2.0-crystal-mist.html](versions/v1.2.0-crystal-mist.html) | [试玩](https://vespera-canvas-sn002.vercel.app/api/version?v=v1.2) | 早期细枝晶与偏蓝雾层；此前反馈不建议作为美术基准 | 低优先级 |
| v1.3 | [v1.3.0-dark-mist-crisp.html](versions/v1.3.0-dark-mist-crisp.html) | [试玩](https://vespera-canvas-sn002.vercel.app/api/version?v=v1.3) | 相对舒适的节奏与冰晶形态；近景清晰度不足 | 重点比较 |
| v1.4 | [v1.4.0-true-black-living-fog.html](versions/v1.4.0-true-black-living-fog.html) | [试玩](https://vespera-canvas-sn002.vercel.app/api/version?v=v1.4) | 全黑底、动态噪声雾、偏薄冰晶 | 待比较 |
| v1.5 | [v1.5.0-macro-ice.html](versions/v1.5.0-macro-ice.html) | [试玩](https://vespera-canvas-sn002.vercel.app/api/version?v=v1.5) | 增强微距细节但运动与背景未获认可 | 重点比较 |
| v1.6 | [v1.6.0-charcoal-mist-rhythm.html](versions/v1.6.0-charcoal-mist-rhythm.html) | [试玩](https://vespera-canvas-sn002.vercel.app/api/version?v=v1.6) | 恢复旧素材导致退步；仅保留历史记录 | 低优先级 |
| v1.7 | [v1.7.0-crystal-depth-charcoal-fog.html](versions/v1.7.0-crystal-depth-charcoal-fog.html) | [试玩](https://vespera-canvas-sn002.vercel.app/api/version?v=v1.7) | 晶体边缘、灰黑背景、速度微调 | 待比较 |
| v1.9 | [v1.9.0-crystal-nightfall-balance.html](versions/v1.9.0-crystal-nightfall-balance.html) | [试玩](https://vespera-canvas-sn002.vercel.app/api/version?v=v1.9) | 黑灰星点、单独下落的小雪；密度探索 | 待比较 |
| v2.0 | [v2.0.0-balanced-3d-drift.html](versions/v2.0.0-balanced-3d-drift.html) | [试玩](https://vespera-canvas-sn002.vercel.app/api/version?v=v2.0) | 中间密度、少量翻转、独立飘雪；后期近景过稀 | 待比较 |
| v2.1 | [v2.1.0-crystal-passage-balanced.html](versions/v2.1.0-crystal-passage-balanced.html) | [试玩](https://vespera-canvas-sn002.vercel.app/api/version?v=v2.1) | 近中远景补充与速度变化；节奏后来被否定 | 待比较 |
| v2.2 | [v2.2.0-v13-rhythm-visible-snow.html](versions/v2.2.0-v13-rhythm-visible-snow.html) | [试玩](https://vespera-canvas-sn002.vercel.app/api/version?v=v2.2) | 恢复 v1.3 速度曲线；小雪点更显眼，但慢速段缺近景 | 重点比较 |
| v2.3 | [v2.3.0-slow-motion-closeup.html](versions/v2.3.0-slow-motion-closeup.html) | [试玩](https://vespera-canvas-sn002.vercel.app/api/version?v=v2.3) | 慢速段和近景冰晶关联；目前候选，不代表最终认可 | 当前候选 |

## 用户本轮批注（待填写）

“重点比较”“低优先级”只记录此前反馈，不代表用户本轮的最后取舍。可使用统一格式：“版本｜保留/待优化/建议删除｜优点｜缺点｜可复用部分”。经明确确认才删除历史版本，或标记某版本为最终版。

## 可复用技术与边界

历史 MOTION_APPROVED.md 保存的基准是 Canvas 2D 三维透视模拟：以 x、y、z 表示雪晶在空间中的位置，推进时减小 z，使用 x/z、y/z 投影，雪晶显示大小随 1/z 增加。这是已经确认存在的机制，不能由此推断后续 v2.3 整体美术已通过验收。

后续候选版本加入远中近景补充、独立背景小雪、星点、灰黑雾层、少量翻转、近景冰晶与慢动作同步等设计。不同版本的参数不可孤立拼凑，需按最后选定版本检查配合效果。

## 仓库检查

- versions/ 集中保存历史 HTML，v1.2 与 v1.5 还有对应素材目录。现阶段不需要集体移动或删除。
- 效果目录根 index.html 是原版 v1.0；versions/index.html 指向最新实验版 v2.3。用途不一致但尚有历史价值，不能误认为两个入口都是最终版。
- MOTION_APPROVED.md 记录原运动基准，并未认定新版本完成。
- 仓库主 README.md 原先只记录到 v1.5，现应以本台账衔接后续版本。

## 最终确认后的交付清单

1. 选定最终版本及源码、可直接打开的 Vercel 地址、Git 提交编号。
2. 按背景星点、背景小雪、远中近景冰晶、雾气、速度曲线、透视、材质和分辨率逐项记录参数及默认值。
3. 提取独立可复用的 JavaScript、CSS、材质素材与最小调用示例；注明相对资源路径与授权边界。
4. 在手机与桌面检验载入、初始帧、慢镜头近景、加速段、长时间循环和控制台错误，保存证据。
5. 由用户明确敲定后另建 WORK_LOG.md，复盘本次需求歪曲、版本回退、失控的粒子密度、速度与近景脱节、截图验收不充分、链接无法打开等问题及对应预防规则。

**上述最终交付与工作复盘目前尚未完成，不应对外标记为正式可复用模块。**
