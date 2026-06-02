# video-master

配信には使わない、エンコード用の高ビットレート元動画（マスター）を置く場所。

- `shinmei-mv.mp4` — H.264 1920x1080 60fps 約16Mbps（`public/videos/shinmei-mv.webm` の元素材）。
  以前は `public/videos/` にあり未参照のままデプロイに含まれていたため、ここへ退避した。
  `public/` 外なので **サイト配信・デプロイには含まれない**（Next は `public/` のみ静的配信）。

将来 `shinmei-mv.webm` を再エンコードする際は、既圧縮の webm ではなくこのマスターを入力にすると
世代劣化を避けられる。
