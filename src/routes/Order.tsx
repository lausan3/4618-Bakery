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
      <div id="contact-text-container" className="page-container gap-y-4">
        <span className="">Know what kind of cake you want for your next event? Send us the details!</span>
        <span className="font-tc">告诉我们您想要的蛋糕和直径，我们将为您制作</span>
        <span className="">To order, add us on WeChat or send an email to 4618bakery@gmail.com</span>

        <img 
          id="qrcode"
          className="w-1/2"
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