Thuật toán :
Intent Classification: Để xác định ý định của người dùng từ dòng văn bản, Rasa sử dụng các mô hình phân loại như Support Vector Machines (SVM), Naïve Bayes, hoặc các mô hình deep learning như Convolutional Neural Networks (CNN) hoặc Recurrent Neural Networks (RNN).

Entity Recognition: Để trích xuất thông tin cụ thể từ văn bản, Rasa có thể sử dụng mô hình CRF (Conditional Random Fields) hoặc deep learning models như các mô hình với kiến trúc LSTM-CRF.

Response Generation: Rasa cho phép bạn tạo ra các câu trả lời dựa trên quy tắc hoặc sử dụng mô hình deep learning như Transformers để tạo các câu trả lời tự nhiên hơn.

Policy Learning: Để quyết định hành động tiếp theo cho chatbot, Rasa sử dụng policy learning, trong đó có các thuật toán như Reinforcement Learning, như C51, A2C, hoặc các thuật toán dựa trên quy tắc như Rule Policy.



Kích thước đầu vào của Rasa, cụ thể là dữ liệu đầu vào mà bạn cung cấp cho chatbot, có thể thay đổi tùy thuộc vào mục đích cụ thể và cách bạn cấu hình chatbot của mình. Dưới đây là một số loại dữ liệu đầu vào phổ biến cho một hệ thống Rasa:

Tệp Văn bản: Bạn có thể cung cấp dữ liệu đầu vào dưới dạng tệp văn bản, ví dụ như dữ liệu đào tạo cho việc phân loại ý định và trích xuất thực thể, cũng như dữ liệu đầu vào để xác định luật và các câu trả lời.

Dữ liệu Đào tạo: Dữ liệu đào tạo cho các mô hình Machine Learning hoặc Deep Learning mà bạn sử dụng trong Rasa có thể bao gồm các cặp dữ liệu như văn bản và nhãn tương ứng (intent labels, entity labels).

Tệp cấu hình (config files): Bạn có thể cung cấp các tệp cấu hình để xác định kiến trúc mô hình và thông số huấn luyện cho các phần của hệ thống Rasa.

Endpoints (điểm cuối): Bạn có thể cung cấp các endpoints để kết nối với các hệ thống khác, ví dụ như endpoints để xử lý các hành động tùy chỉnh hoặc tương tác với nền tảng giao tiếp.

Nội dung người dùng (user input): Đây là dữ liệu thời gian thực mà chatbot nhận từ người dùng trong quá trình chạy. Nó bao gồm các câu hỏi, thông tin và yêu cầu từ người dùng.



Số lượng dữ liệu cần thiết cho một chatbot về du lịch phụ thuộc vào nhiều yếu tố, bao gồm:

Phạm vi chức năng: Mức độ phức tạp và tính năng của chatbot có ảnh hưởng đáng kể đến số lượng dữ liệu cần thiết. Một chatbot đơn giản chỉ để tư vấn về địa điểm du lịch có thể cần ít dữ liệu hơn so với một chatbot phức tạp hỗ trợ đặt vé máy bay, khách sạn và lên kế hoạch chi tiết cho cuộc du lịch.

Ngôn ngữ và đa dạng yêu cầu: Số lượng ngôn ngữ mà chatbot của bạn hỗ trợ và đa dạng yêu cầu mà người dùng có thể đưa ra cũng quyết định số lượng dữ liệu cần thiết. Đa dạng hơn về ngôn ngữ và yêu cầu cần nhiều dữ liệu hơn.

Hiệu suất mong đợi: Mức độ hiệu suất mong đợi từ chatbot cũng quyết định số lượng dữ liệu cần. Nếu bạn muốn chatbot có khả năng trả lời chính xác và tự động nhiều câu hỏi, bạn cần nhiều dữ liệu hơn để đảm bảo tính chính xác.

Dự án cụ thể: Dự án cụ thể của bạn và các tính năng đặc biệt mà bạn muốn cài đặt có thể yêu cầu một lượng dữ liệu cụ thể. Ví dụ, nếu bạn muốn chatbot cung cấp lịch trình du lịch cá nhân hóa cho từng người dùng, bạn cần có nhiều dữ liệu về các địa điểm, sở thích, và thời gian của họ.