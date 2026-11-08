# SN-002 · 现存版本目录和集中批注

更新于 2026-11-08。当前暂定使用 **v3.2**；不再主动迭代，除非用户明确要求。尚有审美不足，但不标注“完美完成”。

## 逐版对照（当前仓库实际存在的 15 份 HTML）

| 版本 | 在线播放 | 源码 | 当前主要特点与已知反馈 |
|---|---|---|---|
| v1.0 | [打开](https://vespera-canvas-sn002.vercel.app/v1.0.0-original.html) | [HTML](versions/v1.0.0-original.html) | 运动快慢与近景节奏参考；冰晶和背景粗糙 |
| v1.1 | [打开](https://vespera-canvas-sn002.vercel.app/v1.1.0-cold-fog.html) | [HTML](versions/v1.1.0-cold-fog.html) | 毛玻璃背景氛围更好；偏蓝、稀疏、雪花粗糙 |
| v1.3 | [打开](https://vespera-canvas-sn002.vercel.app/v1.3.0-dark-mist-crisp.html) | [HTML](versions/v1.3.0-dark-mist-crisp.html) | 深色雾与雪花改良尝试；节奏与布局不及 v1.0 |
| v1.4 | [打开](https://vespera-canvas-sn002.vercel.app/v1.4.0-true-black-living-fog.html) | [HTML](versions/v1.4.0-true-black-living-fog.html) | 纯黑背景和动态雾；运动尚可，冰晶过薄 |
| v2.2 | [打开](https://vespera-canvas-sn002.vercel.app/v2.2.0-v13-rhythm-visible-snow.html) | [HTML](versions/v2.2.0-v13-rhythm-visible-snow.html) | 恢复 v1.3 速度曲线；雪点垂直飘落，整体勉强保留 |
| v2.3 | [打开](https://vespera-canvas-sn002.vercel.app/v2.3.0-slow-motion-closeup.html) | [HTML](versions/v2.3.0-slow-motion-closeup.html) | 贴脸雪花有可参考画面；布局和雪点方向仍不理想 |
| v2.4 | [打开](https://vespera-canvas-sn002.vercel.app/v2.4.0-v1-cinema-forward-snow.html) | [HTML](versions/v2.4.0-v1-cinema-forward-snow.html) | 整体比较好；恢复 v1.0 节奏与微光远景，慢段贴脸雪花不足 |
| v2.5 | [打开](https://vespera-canvas-sn002.vercel.app/v2.5.0-slow-closeups-fuller-field.html) | [HTML](versions/v2.5.0-slow-closeups-fuller-field.html) | 近远景增加；刻意安排的三片近景雪花出现得突兀 |
| v2.6 | [打开](https://vespera-canvas-sn002.vercel.app/v2.6.0-continuous-3d-flythrough.html) | [HTML](versions/v2.6.0-continuous-3d-flythrough.html) | 连续三维轨迹尝试；快穿梭感和全屏密度不足 |
| v2.7 | [打开](https://vespera-canvas-sn002.vercel.app/v2.7.0-crystal-passage.html) | [HTML](versions/v2.7.0-crystal-passage.html) | 三维层次和透视推进；雪量少、旋转过多、速度不理想 |
| v2.8 | [打开](https://vespera-canvas-sn002.vercel.app/v2.8.0-snow-tunnel.html) | [HTML](versions/v2.8.0-snow-tunnel.html) | 加密远中景、减少旋转；雪点短拖尾不符合审美 |
| v2.9 | [打开](https://vespera-canvas-sn002.vercel.app/v2.9.0-immersive-corridor.html) | [HTML](versions/v2.9.0-immersive-corridor.html) | 增加雪量和快镜；开始密、播放后逐渐稀疏 |
| v3.0 | [打开](https://vespera-canvas-sn002.vercel.app/v3.0.0-persistent-fullscreen-snow.html) | [HTML](versions/v3.0.0-persistent-fullscreen-snow.html) | 改善持续密度；开场1–3秒过密，快镜太猛 |
| v3.1 | [打开](https://vespera-canvas-sn002.vercel.app/v3.1.0-cinematic-diagonal-snow.html) | [HTML](versions/v3.1.0-cinematic-diagonal-snow.html) | 减少开场、放缓快镜，增加斜飘；硬编码固定循环不自然 |
| v3.2 | [打开](https://vespera-canvas-sn002.vercel.app/v3.2.0-natural-falling-snow.html) | [HTML](versions/v3.2.0-natural-falling-snow.html) | 重力、横风和阻力驱动斜飘，开场减少遮挡；当前暂定使用 |

## 已删除的实验版本

v1.2、v1.5、v1.6、v1.7、v1.8、v1.9、v2.0、v2.1 已根据用户此前明确指令删除对应 HTML 文件。历史素材（例如 `versions/v1.2.0-assets/`、`versions/v1.5.0-assets/`）不随之删除；冰晶纹理独立保存于 `assets/`。Git 历史仍可追溯。

## 下一阶段

请用户集中点评 15 版的“保留 / 删除 / 保留部分技术或素材”。**收到新的明确删除名单之前，不删除其他版本。**

用户审定后再同步 `VERSION_REVIEW.md`、清理页面和链接，编写正式 `WORK_LOG.md` 说明本项目反复出现的问题、错误代码机制、验证漏洞及可以执行的防复发规范。工作记录须基于确实发生的修改，不得把未经用户验收的结果写成合格。

比较与批注网页：https://vespera-canvas-sn002.vercel.app/compare/
