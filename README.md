# Vespera Canvas

Velunelle 的前端设计资产库：保存**认可过的视觉模块、动效源码、来源及可复用边界**。

## 第一批资产：《女巫的毒药》开场

- [通俗编号清单](ASSET_INDEX.md)：V-001～V-010（视觉）、M-001～M-006（动效）。
- [机器可读资产目录](assets/index.json)：每项含来源、类型、查找位置及核实状态。
- [四角贴纸原图](assets/stickers/)：4 张可复用手账贴纸，CC BY 4.0，需署名及标注来源；不含第三方人物头像。
- [原始开场代码快照](sources/witches-banquet/opening/)：保存源项目实际 HTML/CSS/JS；手势退场所需主页面源码另存于 [parent/](sources/witches-banquet/parent/)，供以后准确复现；不含第三方头像。
- [独立动效预览](previews/witch-opening/index.html)：保留原始发牌、翻面、拼贴和手势流程，头像以占位符代替；预览并不等于原作完整美术。
- [代码复用提示](REUSE.md)、[协作规范](AGENTS.md)、[项目任务记录模板](templates/PROJECT_TRACKER.csv)。

**原版准确画面及可试玩页面：** https://witches-banquet.fuzzy-egret-1442.chatgpt.site/ ；原始仓库：https://github.com/velunelle/witches-banquet 。

## 第二个项目：《第二个圣诞夜》

- [SK-001 夜雨城 Skill](skills/SK-001-night-rain-city.md)：记录它是什么、官方源地址、使用方法，以及《第二个圣诞夜》新旧版本的源码入口。此项目暂不重复拆解动效组件。
- [Skill 简表](skills/skill-index.csv)：可直接用 WPS 查看、编辑，适合继续增加下一个 Skill。

## 第三批资产：Snow Studies（原创动效复现）

- [SN-001 冰蓝星辉](effects/SN-001-blue-glow/index.html)：独立蓝色飘雪参考。
- [SN-002 雪晶穿梭](effects/SN-002-white-tunnel/versions/index.html)：历史版本与当前实验版。
- [SN-002 全版本目录](effects/SN-002-white-tunnel/VERSION_CATALOG.md)：现存15个可试玩历史版本，当前暂用 v3.2；继续由用户集中批注，未确认前不删除。
- [SN-002 旧批注及研发记录](effects/SN-002-white-tunnel/VERSION_REVIEW.md)：此前反馈与 v2.9–v3.2 的迭代问题。
- [SN-002 v1.0 运动基准](effects/SN-002-white-tunnel/MOTION_APPROVED.md)：包含速度与淡入、放大、淡出的近景编排，不可只复制公式。
- [独立冰晶素材与参数](effects/SN-002-white-tunnel/assets/ice-crystals-v2.3.json)：后期素材已经单独冻结，不会随实验版删除。
- [手机端版本对照网页](https://vespera-canvas-sn002.vercel.app/compare/)：逐版观看并填写批注；正式版仍待用户验收。
- [共享 Canvas 引擎](effects/shared/snow-engine.js)、[背景说明](effects/SNOW_README.md)。

## 使用规则

1. 先按资产编号查询对应源码，不重新搜索相同效果。
2. 原项目文件不覆盖；新项目通过导入或改编复用。
3. 动效只能根据实际代码标记为“已核实”，未发现的效果标记“需补做”，不得冒充已有。
4. 视觉验收需要实际播放/截图；文字只用于解释，不代替动效证据。
5. 人物头像的公开再分发授权未确认，本库不复制头像；已有截图或原游戏并不自动转授权。

初次归档：2026-11-03。
