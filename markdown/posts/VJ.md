---
title: "VJってやつをやりました"
date: "2019-01-14"
---

- イベント詳細
- 映像
- VJ システム
  - 設計
  - 素材ズ
- 参考資料
  - 使った OSS
  - 参考にした作品たち
  - 参考にした記事

## VJ イベントについて

9/15 に InfiniteRave という VJ イベントを Shibuya CAST.ビル内にある孫正義育英財団の施設、Infinity にて開催しました。告知を始めて最初の 1 週間は 6 人ぐらいしか予約なかったので一時期はかなり焦りましたがなんだかんだで 55 人の来場者に来ていただいてそれなりに賑わってました。個人的には VJ・クリエイティブコーディング界隈の大御所の方々に twitter でフィードバック頂いたり、やきとり食べたりできたのでだいぶ幸せです。

事の発端としては 8 月半ばの BRDG の ADirector Channel を見に行って「やっぱイギリス行く前に VJ やりてぇ」っていう僕のわがままから始まったので爆速実施の適当運営に付き合ってくれた出演者一同、財団の方々、スタッフの方々、機材を貸してくださった方々、その他協力していただいた方々には感謝しつくしてもしきれません。ありがとうございました。

出演者は(DJ//VJ):

- Yoshiaki Sakoshita//kaiware
- Gaku//sp4ghet
- Gaku//amagi takayosi
- $hun a.k.a Luigi//sleepJam
- prhyzmica//FMS_Cat

というかなり豪華なライナップでした。

「みんなレイマーチングしてんじゃねーか、ルックが同じになるのでは？」と心配してましたが案外みんな違う感じになっていてよかったです。詳しくは映像をみてください！

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/OTTJK_li17s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## VJ システム

僕が尊敬している[橋本麦さん](https://baku89.com/articles)を見習って可能な限り今回の VJ システムの技術的解説や得られた知見を共有できればと思います。

TL;DR

- [https://github.com/sp4ghet/vj-infiniterave](https://github.com/sp4ghet/vj-infiniterave)
- Unity をメインにした VJ システム
- Redux っぽい設計
- Veda の画面を NDI で送信
- 素材は適当に作っていく(パクっていく)

今回は使い慣れている Unity をメインに開発をすすめていきました。
Unity Technologies Japan の Keijiro Takahashi 大先生が難しいことを色々やってくれているので MIDI, NDI, オーディオ解析などは基本的に何も考えずに使えました。ありがたい。

### コントロール、イベント設計

システムそのものは redux/Elm Architecture っぽい感覚で設計しました。これも keijiro/Flipper で使われているスタイルでしたが、より elm っぽくするために Model の役割として GlobalState というシングルトンを作って、ステートはなるべくそこで管理して、SceneController という Update の役割を担う MonoBehaviour で様々なイベント用の関数を用意していきました。各素材オブジェクトは View っぽい扱いで、GlobalState の値を Update などで参照することでその変化に対応して動作を変化させます。

MIDIController などのデバイス入力では単純に入力を SceneController のメソッドに変換する薄いラッパーとして考えました。MIDI の値はすべて 0-1 になっていたのでそこまで意識せず変換しなくてもよかったですが別のデバイスだったらそのへんもコントローラークラスに入れるべきかもです。今回使用した MIDI コントローラは去年 amazon で探した一番安かった MIDI コントローラの[ARTURIA BEATSTEP ](https://www.amazon.co.jp/dp/B019RDQ4WI/)です。つまみがあまりよくなかったのでスライダーとかがついてる nanoKontrol 辺りが良いかもです。

GlobalState を用意する利点のひとつとしては BPM などを一つの場所で管理できることなどが挙げられますが、ひとつの素材にしか影響の及ばない State なども管理しているのでこれ以上複雑になるとコンポーネントとかを用意して State を細かく分割したりする必要があるかもです。

### 素材ズ

今回 VJ もしていただいた amagi さんが開発している Atom で GLSL が書ける [veda](https://github.com/fand/veda) をキャプチャして Unity に持ってきてライブコーディングっぽいことをしてみました。キャプチャソフト OBS Studio のプラグインで obs-ndi というものがあったのでそれを NDI Sender にして Unity 側で NDI 入力を RenderTexture として受け取って板ポリに当てる感じです。挙動がだいぶ不安定なので同じマシンのローカルでのキャプチャを使っていたのもありモニタが結果的に 3 枚(VJ out, atom, debug preview)必要になるなどかなりデメリットは大きかったですが最終的にその部分は 30 分間は動いてくれました。

絵の中心となっているのはレイマーチングで描画しているウネウネしたやつです。レイマーチングのオブジェクトは凹さんの Object Space Raymarching を参考にしています。影が落ちたり Reflection なども効いてかっこいい感じです。 Distance Function は iq さんの上げているものをいくつか適当につなげて動かしています。今なら uRaymarching を使ったほうが良いのかも？
当初は MIDI コンを叩くと変形するようにしたのですが、忙しくなりすぎるので勝手に動くようにしました。一応最後に苦し紛れで WorldSpace なものも作りました。これはエレベーターっぽい絵と、シェルピンスキートライアングルを使ったものになっています。

<div class="insta-container"><div class="insta-wrapper">
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/BpHmWG2DEzy/" data-instgrm-version="12">
</div>
</div>

オーディオリアクティブな素材が 3 つあります。4 分音符＋低い音に反応して発生する正 n 角形メッシュの RadialMesh と、8 部音符+中くらいの音に発生する絵文字のパーティクルと、オーディオビジュアライザっぽい動きをする WaveTunnel です。前者ふたつは keijiro/Lasp の LowPassPeak や BandPassPeak を使っており、最後のは GetSpectrum の波形を Log 変換して渡しています。
オーディオリアクティブな素材は実際に VJ しているときにあまり世話をしなくても勝手にいい感じになってくれるので便利でした。総じて言えることですがもっとオーディオリアクティブな素材を作ればよかったと反省してます。絵文字パーティクルは当日の朝とかに考えて実装したので事前にもっとやる気出してればもっとやれた・・・

Mesh をよしなに作って、音に合わせて変形させるにあたってかなり手打ちで頂点や三角形の順番を指定しましたが、一度やってしまえば変形させるほうは比較的簡単にできるのでよかったです。また、微妙な点ですが、トンネルの進行が曲がるようにも工夫してみましたがちょっとわかりづらかったのでもうちょっと映えるように工夫が必要です。

今回色々試行錯誤した結果感じたのは実装の難易度は特に絵としての良さには相関が無いということでした。めっちゃめんどくさいポストエフェクトよりは普通に Recolor で全体の配色を変えたりしたほうが楽できれいだったりするのでそのへんの嗅覚は磨く余地がありそうです。Recolor は`Gradient`型の配色で画面の色味を調整するのですが、僕の知る Algorithmic なカラーパレットは Cosine Gradient しか無いのでとりあえずそれを C#で実装して MIDI 入力で`Gradient`が変わるようにしました。
RandomGradient を生成するときに、色味の統一感を維持しつつランダム性も保つために地味に RandomRange を調整したりしています。

全体的な反省としては素材の数が足りなくて途中から飽きてしまう絵になってしまったのと、DJ の流れに合わせた展開などを意識する暇もなくアセアセと適当にボタンを押してる状態だったのが悔やまれます。 ライブコーディングの部分に関しても、よほど普段から書いていない限りもっと絵のパターンを用意したりしておかないと当日適当にコードを書いてまともな絵になることは無いですね。また、Unity 側で画面中央に絵がある状態で Veda でも画面中央にある図形をコネコネしていると Veda 側が何も見えないのでものすごく無駄な時間が過ぎていた場面があり、Preview モニタで逐一最終出力の雰囲気を確認しながらやっていくべきでした。

いくつかの習作や途中経過等を掲載しておきます:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Crtsiduvv-I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/19VzLe0fMjo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 参考資料

### 使った OSS

- https://github.com/keijiro/Lasp
- https://github.com/keijiro/Kino
- https://github.com/keijiro/KlakNDI
- https://github.com/keijiro/MidiKlak

### 参考にした作品たち

- https://github.com/keijiro/Flipper
- https://github.com/keijiro/Museum
- https://pixelspiritdeck.com/
- https://eizo100.jp/
- http://a.co/d/9AduqaU
- https://twitter.com/thespite/status/1033398219705917447
- https://twitter.com/_Nokir/status/1039610501418762240

### 参考にした記事

- http://tips.hecomi.com/entry/2016/09/26/014539
- https://indievisuallab.stores.jp/items/59edf11ac8f22c0152002588
- https://docs.unity3d.com/Manual/GeneratingMeshGeometryProcedurally.html
- https://docs.unity3d.com/ScriptReference/AudioSource.GetSpectrumData.html
- https://docs.google.com/presentation/d/12RrqyAkFanKmfL96ZHvhDCozE-_rKFPlU1YVwej4_bc/edit
- https://iquilezles.org/www/articles/distfunctions/distfunctions.htm
- https://www.ameet.jp/digital-imaging/2094/
- http://dev.thi.ng/gradients/
