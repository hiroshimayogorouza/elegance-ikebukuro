# エレガンス池袋所 - ウェブサイト

池袋駅徒歩1分、人妻専門高級温メンズエステ

## プロジェクト概要

このプロジェクトは、「エレガンス池袋所」のウェブサイトです。高級感と清潔感を最重視したデザインで、30代・40代の人妻セラピストによる癒しのサービスを提供するメンズエステサロンのオンラインプレゼンスを実現します。

### 主な特徴

- **高級感**: 深みのあるグリーン×ゴールドの配色
- **清潔感**: 白を基調とした洗練されたレイアウト
- **エレガンス**: 繊細な装飾と上品なタイポグラフィ
- **レスポンシブ**: PC・タブレット・スマホ完全対応
- **WordPress対応**: 移行しやすい構造化されたコード

## ファイル構成

```
elegance-ikebukuro/
├── index.html              # トップページ
├── system.html             # システム・料金ページ
├── staff.html              # セラピスト一覧ページ
├── staff-detail.html       # セラピスト詳細ページ
├── schedule.html           # スケジュールページ
├── howto.html              # ご利用方法ページ
├── recruit.html            # 求人情報ページ
├── css/
│   └── style.css          # メインスタイルシート
├── js/
│   └── main.js            # メインJavaScript
└── README.md              # このファイル
```

## デザインコンセプト

### カラーパレット

- **メインカラー**: 
  - グリーン: `#2d5d3f`, `#3a7350`, `#1f4129`
  - ゴールド: `#d4af37`, `#e6c65a`, `#c9a961`
- **ベースカラー**: 
  - ホワイト: `#ffffff`, `#fafafa`
  - グレー: `#f5f5f5`, `#e8e8e8`
- **テキストカラー**: `#333333`, `#666666`, `#999999`

### タイポグラフィ

- **見出し**: Noto Serif JP, Playfair Display (明朝体・セリフ体)
- **本文**: Noto Sans JP (ゴシック体)
- **装飾**: Playfair Display, Cormorant Garamond

### デザイン要素

- ゴールドの細いボーダーライン (1-2px)
- 繊細な装飾フレーム
- グラデーション背景
- 控えめなシャドウ効果
- 優雅なホバーアニメーション

## 機能一覧

### 実装済み機能

1. **トップページ**
   - ヒーローセクション（グラデーション背景）
   - コンセプト紹介
   - ピックアップセラピスト
   - システム・料金概要
   - アクセス情報

2. **システム・料金ページ**
   - コース料金表
   - オプション一覧
   - 支払い方法
   - 注意事項

3. **セラピスト一覧ページ**
   - 全セラピストのカード表示
   - ホバーエフェクト
   - タグ付け

4. **セラピスト詳細ページ**
   - プロフィール情報
   - セラピストからのコメント
   - 週間スケジュール
   - 指名予約ボタン

5. **スケジュールページ**
   - 全セラピストの出勤表
   - 時間帯別の表示

6. **ご利用方法ページ**
   - ステップバイステップガイド
   - 初めての方向け案内

7. **求人情報ページ**
   - 待遇・福利厚生
   - 応募要件
   - 募集要項

### レスポンシブ対応

- **デスクトップ**: 1200px以上
- **タブレット**: 768px - 1199px
- **モバイル**: 〜767px

## WordPress移行ガイド

このサイトはWordPress化を前提に設計されています。

### ステップ1: テーマフォルダの作成

```
wp-content/themes/elegance-ikebukuro/
├── style.css
├── functions.php
├── index.php
├── header.php
├── footer.php
├── page.php
├── single.php
├── archive-therapist.php
├── single-therapist.php
└── assets/
    ├── css/
    ├── js/
    └── images/
```

### ステップ2: カスタム投稿タイプの作成

#### functions.phpに追加

```php
<?php
// セラピストのカスタム投稿タイプ
function create_therapist_post_type() {
    register_post_type('therapist',
        array(
            'labels' => array(
                'name' => 'セラピスト',
                'singular_name' => 'セラピスト'
            ),
            'public' => true,
            'has_archive' => true,
            'menu_icon' => 'dashicons-admin-users',
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
            'rewrite' => array('slug' => 'staff'),
        )
    );
}
add_action('init', 'create_therapist_post_type');

// カスタムタクソノミー（タグ）
function create_therapist_taxonomy() {
    register_taxonomy(
        'therapist_tag',
        'therapist',
        array(
            'label' => 'タグ',
            'rewrite' => array('slug' => 'therapist-tag'),
            'hierarchical' => false,
        )
    );
}
add_action('init', 'create_therapist_taxonomy');
?>
```

### ステップ3: カスタムフィールドの設定

**Advanced Custom Fields (ACF)プラグインを使用**

セラピスト投稿に以下のフィールドを追加:

- 年齢 (number)
- 身長 (text)
- バスト (text)
- ウエスト (text)
- ヒップ (text)
- コメント (textarea)
- 月曜日スケジュール (text)
- 火曜日スケジュール (text)
- ... (以下、各曜日分)

### ステップ4: テンプレートファイルの作成

#### header.php

```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<!-- 現在のheaderセクションをここに -->
```

#### footer.php

```php
<!-- 現在のfooterセクションをここに -->
<?php wp_footer(); ?>
</body>
</html>
```

#### single-therapist.php

```php
<?php get_header(); ?>

<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
    <section class="staff-detail-section">
        <div class="container">
            <div class="staff-detail-content">
                <div class="staff-detail-image">
                    <?php the_post_thumbnail('large'); ?>
                </div>
                
                <div class="staff-detail-info">
                    <div class="staff-detail-header">
                        <h2 class="staff-name-ja">
                            <?php the_title(); ?> 
                            <span class="staff-age">(<?php the_field('age'); ?>歳)</span>
                        </h2>
                        <div class="staff-stats">
                            <span>T<?php the_field('height'); ?>cm</span>
                            <span>B<?php the_field('bust'); ?></span>
                            <span>W<?php the_field('waist'); ?>cm</span>
                            <span>H<?php the_field('hip'); ?>cm</span>
                        </div>
                    </div>
                    
                    <div class="staff-detail-body">
                        <h3 class="staff-section-title">セラピストからのコメント</h3>
                        <p class="staff-comment"><?php the_field('comment'); ?></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
<?php endwhile; endif; ?>

<?php get_footer(); ?>
```

### ステップ5: スケジュール管理

**Options Pageを作成してスケジュールを管理**

```php
// functions.phpに追加
if( function_exists('acf_add_options_page') ) {
    acf_add_options_page(array(
        'page_title' => 'スケジュール管理',
        'menu_title' => 'スケジュール',
        'menu_slug' => 'schedule-settings',
        'capability' => 'edit_posts',
    ));
}
```

### 推奨プラグイン

1. **Advanced Custom Fields (ACF)** - カスタムフィールド管理
2. **Contact Form 7** - お問い合わせフォーム
3. **Yoast SEO** - SEO最適化
4. **WP Super Cache** - キャッシュ管理
5. **Wordfence Security** - セキュリティ
6. **UpdraftPlus** - バックアップ

## 開発ガイドライン

### HTML

- セマンティックなタグを使用
- アクセシビリティを考慮（alt属性、ARIA）
- WordPress化しやすいセクション分割

### CSS

- CSS変数（カスタムプロパティ）を活用
- BEMに近い命名規則
- モバイルファーストのレスポンシブデザイン

### JavaScript

- バニラJavaScript（依存なし）
- プログレッシブエンハンスメント
- パフォーマンス最適化

## ブラウザ対応

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- iOS Safari (iOS 13+)
- Android Chrome (Android 8+)

## パフォーマンス最適化

- CSS/JSの最小化
- 画像の最適化（WebP推奨）
- Lazy loading実装
- CDNの活用（フォント、アイコン）

## セキュリティ対策（WordPress化後）

1. **ログイン保護**
   - ログインURLの変更
   - 2要素認証の導入
   - ログイン試行回数制限

2. **データベース保護**
   - テーブルプレフィックスの変更
   - 定期的なバックアップ

3. **ファイル保護**
   - wp-config.phpの保護
   - ディレクトリインデックスの無効化

4. **SSL/HTTPS**
   - SSL証明書の導入
   - 全ページHTTPS化

## デプロイメント

### 開発環境

1. ローカル開発環境（MAMP/XAMPP）
2. ステージング環境（テスト用）
3. 本番環境

### デプロイ手順

1. ファイルのアップロード（FTP/SFTP）
2. データベースのインポート
3. wp-config.phpの設定
4. パーマリンク設定の更新
5. キャッシュのクリア

## サポート対応

### 店舗情報

- **店名**: エレガンス池袋所
- **住所**: 東京都豊島区池袋（詳細はご予約時にお伝え）
- **電話**: 03-6912-6211
- **営業時間**: 10:00〜24:00（年中無休）
- **最寄駅**: 池袋駅徒歩1分

### コンセプト

30代・40代の大人な魅力あふれる人妻セラピストとの癒しのひととき。洗練された空間で極上のリラクゼーションをご提供します。

## ライセンス

このプロジェクトは「エレガンス池袋所」専用のウェブサイトです。

## 更新履歴

### Version 1.0.0 (2024-01-06)
- 初回リリース
- 全7ページ実装
- レスポンシブ対応完了
- WordPress移行ガイド作成

---

**制作**: 2024年1月
**デザインコンセプト**: 高級感・清潔感・エレガンス
**対応デバイス**: PC / Tablet / Mobile