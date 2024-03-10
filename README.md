# study-TypeScript2

## 型推論の注意点

以下のように明示的に型を指定するが可能。
const person: {
name: string;
age: number;
} = {
name: "miya",
age: 28,
};

しかし、これは TypeScript に型を理解させるだけの情報。型推論がうまく動作する場合、明示的に型を指定する必要はない。
この場合の良いやり方は型を書かないこと（なるべく TypeScript の型推論に任せるのが良いやり方）
→ より簡潔で保守性の高いコードになる

const person = {
name:"miya",
age:"28
}

---

## 基本的な型

### Array 　

JavaScript の全ての Array。
要素の方は、柔軟にも厳格にも指定できる

### Tuple

要素の長さが固定された配列（配列の型をより厳密に明確に指定する場合に使用する）
例：role: [number, string];

Array 対して要素の数と、それぞれどの型なのか指定できるが、
注意点として、push ができてしまう

### Enum（列挙型）

定数の集合に対して名前をつけて管理できる
{}を使い、定数のリストを定義する。
それらの定数には自動的にゼロから始まる number が割り当てられる。
ある定数の集合の一覧に名前をつけて管理する。
（Enum の定数にはデフォルトで 0 からの数値が割り当てられる）

// Admin(管理者):0,Read only user(読取専用):1,Author(作者):2

enum Role {
ADMIN,
READ_ONLY,
AUTHOR,
}

すべての定数に値を設定できる
enum Role {
ADMIN = 100,
READ_ONLY = 10,
AUTHOR = 1,
}

文字列の設定も可能

### Any

TypeScript に何も伝えない
基本的にどんな値でも持たせることができる
型を特に指定しない場合に使用する。
（どんな値になるか全くわからない場合、最後の手段として使用する）

### union 型

例：
function combine(input1: number | string, input2: number | string) {}

### literal 型

値をのものを厳密に指定するもの。
resultConversion: "as-number" | "as-text"

### alias 型

型の定義を再利用することができる  
→ 型の書き間違えや、型の名前を説明的なものにすることによって、開発の意図をより明確にコードに表せる

例：type Combinable = number | string;

### コンパイラオプションメモ

・outDir
→ 出力先の JS の格納先を指定できる

・rootDir
→ ソースが配置されるルートのフォルダを設定する  
tsc を実行した際に、設定したパス配下の TS ファイルがコンパイル対象になる

・sourceMap
→ ブラウザのデバッグ>ソースで ts ファイルを見ることができるようになる
（ブレイクポイントもおける）

・removeComments
→TS で記載されているコメントアウトをコンパイル後のファイルで削除する
（JS のファイルを小さくすることができる）

・noEmitOnError
→ 何かエラーがある場合は JS ファイルを出力しない
デフォルトでは false になっており、エラーがあっても JS ファイルを出力する

・Type Checking
上記は TS の型チェックタイプチェックをどの程度厳格にするか設定できる  
7 種類ある

・strict
→ 厳格なという意味
これが true になっている場合、7 種類全て有効になっているということと同じ

・noImplicitAny

・strictNullChecks
→null かもしれないオブジェクトにアクセスする際にそのオブジェクトが null の可能性を排除できない場合、エラーを発生させる

・strictFunctionTypes
→ 関数の方に対して厳格にチェックするためのオプション
関数のパラメータや戻りの型に関するチェック

・noUnusedLocals
→ 利用しないローカル変数を許可しない
（グローバル変数はエラーにならない）

・noImplicitReturns
→ 関数があるときに値を返し、ある時には返さないという時にエラーが発生する
分岐処理で return の書き忘れを防げる
