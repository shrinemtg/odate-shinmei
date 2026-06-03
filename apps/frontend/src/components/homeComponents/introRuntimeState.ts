// イントロ演出の再生状態を「JSランタイム上のメモリ」だけで保持する。
//
// - フルロード（アクセス/リロード）では、このモジュールが評価し直されてフラグが
//   false にリセットされる → 毎回イントロを再生する。
// - サイト内のクライアント遷移（next/link など）ではランタイムが生き続けるため、
//   一度再生済みなら true を返し、ホームに戻った時だけイントロをスキップできる。
//
// localStorage / sessionStorage を使わないので「再訪問スキップ時の白チラつき」が
// 起きる経路自体を持たない。SSR（サーバー）では常に false のまま（マークはクライアント
// でのみ行う）なので、初回描画は必ずイントロを含み、ハイドレーション不整合も起きない。
let introPlayed = false

export const hasIntroPlayed = () => introPlayed

export const markIntroPlayed = () => {
  introPlayed = true
}
