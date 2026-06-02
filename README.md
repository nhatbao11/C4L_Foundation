# Quỹ Cỏ 4 Lá (C4L Foundation) - Website & Student Portal

Chào mừng bạn đến với mã nguồn website chính thức của **Quỹ Học Bổng Sinh Viên Cỏ Bốn Lá (C4L Foundation)**. Đây là một hệ thống được xây dựng để truyền thông và quản lý học bổng theo mô hình Doanh nghiệp Xã hội / Hệ sinh thái Đầu tư Phát triển Con người (Human Capital Investment Ecosystem).

---

## 📌 1. Bối Cảnh & Định Vị Thương Hiệu C4L

Khi chỉnh sửa nội dung hoặc phát triển tính năng, lập trình viên và người viết nội dung **bắt buộc** tuân thủ các nguyên tắc sau:
* **Định vị:** C4L đầu tư vốn, cơ hội, mentor và môi trường thực chiến để sinh viên từ hoàn cảnh khó khăn trở thành các chuyên gia tự lập (**Self-Made Professionals**).
* **Tinh thần thương hiệu:** *Từ Hy vọng đến Tự chủ / From Potential to Professional*.
* **Tông giọng (Tone & Voice):** Tuyệt đối **không** dùng từ ngữ mang tính chất "ban phát", "cứu giúp", "tội nghiệp" hay "thương hại". Thay vào đó, sử dụng các từ khóa: *đồng hành, đầu tư vào con người, trao cơ hội, phát triển năng lực, tự chủ, trưởng thành, đáp đền*.
* **Màu sắc chủ đạo:** Xanh lá cây (Emerald Green) và Trắng.

---

## 🛠️ 2. Công Nghệ Sử Dụng (Tech Stack)

Dự án được xây dựng dựa trên các công nghệ hiện đại nhất:
* **Core:** [Next.js 16 (App Router)](https://nextjs.org/) & [React 19](https://react.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Đa ngôn ngữ (i18n):** [next-intl](https://next-intl-docs.vercel.app/) (Hỗ trợ hai ngôn ngữ chính: Tiếng Việt `vi` và Tiếng Anh `en`).

---

## 🚀 3. Tính Năng Kỹ Thuật Đã Hoàn Thiện

* **Bilingual Routing:** Định tuyến đa ngôn ngữ tự động qua tiền tố `/[locale]`.
* **SEO & Sitemap Động:** 
  * Tự động tạo tệp `sitemap.xml` động (`src/app/sitemap.ts`) quét toàn bộ các đường dẫn và ngôn ngữ của hệ thống.
  * Tự động sinh tệp `robots.txt` (`src/app/robots.ts`) chỉ dẫn các công cụ tìm kiếm thu thập dữ liệu đúng chuẩn.
* **Đồng Bộ Siêu Dữ Liệu (Metadata & Social Sharing):**
  * Tích hợp ảnh Banner xem trước (Open Graph Image) chuẩn kích thước 1200x630px hiển thị logo cỏ 4 lá và hình ảnh sinh viên tốt nghiệp đầy cảm hứng khi chia sẻ link lên Facebook, Zalo, LinkedIn.
  * Favicon và Icon ứng dụng di động đã được tách nền trong suốt dạng tròn chuẩn màu xanh lá C4L.
* **Hệ Thống Báo Lỗi & Tải Trang (Error Boundaries):**
  * Thiết kế đồng bộ trang tải (`loading.tsx`), trang không tìm thấy (`not-found.tsx`) và trang lỗi hệ thống (`error.tsx`/`global-error.tsx`) theo phong cách tối giản, tập trung.

---

## 📁 4. Cấu Trúc Thư Mục Chính

```text
c4l/
├── messages/               # Tệp dịch đa ngôn ngữ (vi.json, en.json)
├── public/                 # Các tài nguyên tĩnh (logo, ảnh minh họa)
│   └── images/             # Chứa ảnh carousel, hình ảnh hoạt động C4L
└── src/
    ├── app/                # Next.js App Router
    │   ├── [locale]/       # Các trang đa ngôn ngữ (Trang chủ, About, Apply...)
    │   ├── favicon.ico     # Favicon trong suốt của C4L
    │   ├── icon.png        # Icon trình duyệt trong suốt
    │   ├── apple-icon.png  # Icon thiết bị Apple
    │   ├── opengraph-image.png # Ảnh preview chia sẻ mạng xã hội
    │   ├── robots.ts       # Trình tự động tạo robots.txt
    │   └── sitemap.ts      # Trình tự động tạo sitemap.xml
    ├── components/         # Các Component tái sử dụng
    │   ├── about/          # Component cho trang Giới thiệu (About)
    │   └── home/           # Component cho Trang chủ (Hero, Pillars, News...)
    └── middleware.ts       # Middleware xử lý ngôn ngữ & điều hướng URL
```

---

## 💻 5. Hướng Dẫn Phát Triển (Development)

### Cài đặt thư viện:
```bash
npm install
```

### Chạy ứng dụng ở môi trường local (Development Mode):
```bash
npm run dev
```
Trang web sẽ chạy tại địa chỉ [http://localhost:3000](http://localhost:3000).

### Biên dịch ứng dụng (Production Build):
```bash
npm run build
```

### Chạy thử bản production sau khi build thành công:
```bash
npm run start
```
