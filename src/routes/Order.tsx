import { useState } from "react";
import EmailForm from "../Components/EmailForm";

const Order = () => {
  // const [formData, setFormData] = useState<
  //   {name: string | null, email: string | null, subject: string | null, body: string | null}>({name: null, email: null, subject: null, body: null});

  // const mailToEmail = async (event: any) => {
  //   event.preventDefault();
    
  //   if (!formData.name || !formData.email || !formData.subject || !formData.body) {
  //     alert("You're missing a required form field");
  //     return;
  //   }
    
  //   const mailService = MailService.getInstance();
  //   mailService.createConnection();
  //   await mailService.sendMail('X-Request-Id',
  //     {
  //       from: formData.email,
  //       to: process.env.SMTP_HOST || "",
  //       subject: formData.subject,
  //       text: formData.body,
  //       html: ""
  //     }
  //   )

    
  // }

  return (
    <div className="main-container">
      <div id="contact-text-container" className="page-container gap-y-8 text-center">

        <div className="english-chinese-stack">

          <span>Know what kind of cake you want for your next event? Send us the details!</span>
          <span className="font-tc">知道下次活動想要哪種蛋糕嗎？請向我們發送詳細資訊！</span>
        </div>

        <div className="english-chinese-stack">

          <span>To order, add us on WeChat or send an email to <span className="email">4618bakery@gmail.com</span>.</span>
          <span className="font-tc">如需訂購，請新增我們的微信或發送電子郵件至 <span className="email font-sans">4618bakery@gmail.com</span>.</span>
        </div>

        <img 
          className="qrcode"
          src="./../../QRCode.JPEG"
        />
      </div>

      {/* <EmailForm
        setFunction={setFormData}
        formSubmit={mailToEmail}
      /> */}
    </div>
  )
}

export default Order