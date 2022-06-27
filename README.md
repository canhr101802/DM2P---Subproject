# DM2P---Subproject
1. Tổng hợp đối tượng đồ họa 3D theo cách tương tự như đã làm với FaceBuilder. Sau đó, có thể trang trí đối tượng này theo ý muốn (thêm màu sắc, chất liệu, chiếu sáng...). Khi trình bày đối tượng, cho phép người dùng xoay góc nhìn (bằng chuột, phím nhấn, chạm tay) và có 1 trong các tính năng tương tác với người dùng (dùng chuột, gõ phím, chạm tay...) sau: 
1A-Có chuyển động cục bộ (há miệng, xòe/cụp...); 
1B-Chiếu sáng lập lòe, phun lửa; 
1C-Biến hình, thay đổi chất liệu và màu sắc kỳ quái.
Đối tượng 3D với các thuộc tính và tính năng vừa được tạo sẽ được tái sử dụng, nhúng vào trong các phối cảnh không gian cụ thể. Do đó, hãy đóng gói mã nguồn thành API để hỗ trợ người sáng tạo nội dung có thể lập trình sau này (ví dụ, trong Python, C#, C++...).

2. Xây dựng phối cảnh không gian 3D theo một trong 2 cách sau:
2A-Tải về bản đồ số 3D của một khu vực mở (khu đô thị, khu rừng, bãi chiến trường...) thể hiện rõ địa hình địa vật (vách núi, tòa nhà, đường sá...) sử dụng OSM hoặc Google Maps. Có thể trang trí cho các chi tiết của bản đồ thêm sống động và/hoặc bổ sung thêm các đối tượng, hình ảnh giả tưởng;
2B-Tự bố trí các vật thể trong khoảng không kín (căn phòng, công xưởng, khuôn viên, khoang máy móc...). Ít nhất 5 vật thể hiện hữu trong phối cảnh.
3. Sử dụng các công cụ lập trình nội dung số như Blender, Unity, Google, Adobe, X3D, Maya, OpenCV, v.v. để gia công các tư liệu đầu vào nói trên, nhúng đối tượng 3D nói trên (được tạo trong Mục 1.) vào phối cảnh vừa được xây dựng.

4. Sử dụng API được đóng gói trong Mục 1., lập trình cho phép người dùng điều khiển quỹ đạo chuyển động của đối tượng 3D bằng chuột hoặc phím nhấn trong bản đồ số nói trên, và trong quá trình chuyển động, đối tượng cho phép người dùng tương tác theo tính năng đã chọn. Đối tượng còn phát ra âm thanh 3D trầm bổng, to nhỏ, phỏng tạo phản xạ âm từ các vật thể xung quanh. Ngoài ra, thực hiện thêm một trong các công việc sau: 
4A-Đối tượng 3D phủ bóng lên các vật thể trong quá trình chuyển động, khiến chúng biến dạng và thay đổi chất liệu;
4B-Đối tượng 3D có đáp ứng với môt vài tình huống cụ thể, ví dụ khi người dùng hạ thấp độ cao để nó va vào cao ốc thì bốc cháy cả hai;
4C-Đối tượng 3D biết tự né các chướng ngại vật.
