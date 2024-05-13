import './App.scss';
import About from './pages/About';
import Home from './pages/Home';
import { useState } from "react";
import { createContext } from "react";
import person1 from "./images/person-1.webp";
import person2 from "./images/person-2.webp";
import design from "./images/myCV-design.svg";
import app from "./images/myCV-app.svg";
import photo from "./images/myCV-photo.svg";
import web from "./images/myCV-web.svg";
import Layout from './pages/Layout';

export const Data = createContext();

function App() {
  const [page, setPage] = useState("home");

  if (page === "home") return (
    <>
      <Data.Provider value={{
        setPage: setPage
      }}>
        <Home />
      </Data.Provider>
    </>
  );
  else if (page === "about-tin") return (
    <>
      <Data.Provider value={{
        setPage: setPage,
        img: person1,
        name: "Nguyễn Dương Trọng Tín",
        descOne: "Một lập trình viên front-end với niềm đam mê sâu sắc về sự sáng tạo và công nghệ. Tôi tin rằng trải nghiệm người dùng là trọng tâm của mọi dự án phát triển web, và tôi luôn tập trung vào việc tạo ra các giao diện người dùng đẹp và dễ sử dụng.",
        descTwo: "Với kinh nghiệm làm việc trong các dự án đa dạng, từ các trang web cá nhân đến các ứng dụng doanh nghiệp phức tạp, tôi đã phát triển kỹ năng vững chắc trong việc sử dụng các công nghệ như HTML, CSS và JavaScript. Tôi luôn cập nhật với những xu hướng mới nhất trong ngành và thích thú với việc thử nghiệm các framework và thư viện front-end mới để tối ưu hóa hiệu suất và trải nghiệm người dùng.",
        skill: [
          { img: design, title: "Ui/Ux Design", desc: "Kinh nghiệm của tôi đã trải dài qua nhiều dự án, từ các ứng dụng di động đơn giản đến các nền tảng phức tạp" },
          { img: app, title: "App Development", desc: "Với kinh nghiệm trong phát triển ứng dụng di động, tôi đã tham gia vào việc xây dựng các ứng dụng từ concept đến triển khai" },
          { img: photo, title: "Photography", desc: "Tôi chuyên chụp cảnh đẹp, chân dung, và sự kiện với mục tiêu ghi lại những khoảnh khắc đẹp và ý nghĩa" },
          { img: web, title: "Web Development", desc: "Sử dụng kiến thức vững về các ngôn ngữ lập trình như Python, Java, và JavaScript, cùng với các framework như Django, Spring và React, tôi đã tham gia vào việc xây dựng các sản phẩm phần mềm đáng tin cậy và hiệu quả" }
        ]
      }}>
        <About />
      </Data.Provider>
    </>
  );
  else if (page === "about-han") return (
    <Data.Provider value={{
      setPage: setPage,
      img: person2,
      name: "Nguyễn Huỳnh Mỹ Hân",
      descOne: "Với sự hiểu biết sâu sắc về ngành Việt Nam học, tôi đã phát triển một loạt các kỹ năng đặc biệt trong việc nghiên cứu về văn hóa, lịch sử và xã hội của Việt Nam. Khả năng phân tích sâu sắc và đánh giá đúng đắn các nguồn tài liệu văn hóa và lịch sử là một trong những điểm mạnh của tôi. Tôi có khả năng làm việc độc lập và trong nhóm, xử lý một lượng lớn thông tin một cách cẩn thận và có cấu trúc. Sự sáng tạo và linh hoạt trong việc tiếp cận vấn đề cũng giúp tôi tạo ra các phân tích sâu sắc và ý tưởng mới trong lĩnh vực này.",
      descTwo: "Kinh nghiệm của tôi trong ngành Việt Nam học không chỉ dừng lại ở lĩnh vực nghiên cứu mà còn được mở rộng và áp dụng trong nhiều bối cảnh khác nhau. Tôi đã có cơ hội làm việc với các tổ chức phi lợi nhuận và doanh nghiệp, cung cấp kiến thức chuyên môn về văn hóa và thực tiễn kinh doanh tại Việt Nam. Sự hiểu biết sâu sắc về nền văn hóa và xã hội đã giúp tôi đưa ra các chiến lược và giải pháp phù hợp, đồng thời tạo ra mối liên kết hiệu quả với cộng đồng và đối tác trong môi trường làm việc đa văn hóa.",
      skill: [
        { img: design, title: "Ui/Ux Design", desc: "Trong quá trình làm việc, tôi đã có cơ hội tham gia vào nhiều dự án thiết kế UI/UX từ các ứng dụng di động đến giao diện web" },
        { img: app, title: "App Development", desc: "Tôi đã tích luỹ được một loạt các kỹ năng trong việc phát triển ứng dụng di động và web, từ việc lập trình đến quản lý dự án và kiểm thử" },
        { img: photo, title: "Photography", desc: "Tôi sở hữu kiến thức vững vàng về cách sử dụng ánh sáng, góc chụp và cấu trúc hình ảnh để tạo ra các tác phẩm nhiếp ảnh ấn tượng và có sức lan tỏa mạnh mẽ" },
        { img: web, title: "Web Development", desc: "Với kiến thức vững về HTML, CSS và JavaScript, tôi có khả năng tạo ra các giao diện web đẹp và tương tác" },
        { img: photo, title: "Chụp hình", desc: "Chụp hình là một trong những niềm đam mê lớn nhất của tôi. Tôi thích sử dụng máy ảnh để ghi lại những khoảnh khắc đẹp và ý nghĩa trong cuộc sống" },
        { img: web, title: "Web Development", desc: "việc kết hợp cả front-end và back-end development trong một dự án, thiết kế giao diện người dùng đến việc xây dựng logic nghiệp vụ và cơ sở dữ liệu" },
        { img: web, title: "Web Development", desc: "Sử dụng kiến thức vững về HTML, CSS, JavaScript, và các framework như React và Node.js" }
      ]
    }}>
      <About />
    </Data.Provider>
  );
  else if (page === "layout") return (
    <>
      <Data.Provider value={{
        setPage: setPage
      }}>
        <Layout />
      </Data.Provider>
    </>
  )
  else { }
}

export default App;
