interface props {
  setFunction: React.Dispatch<React.SetStateAction<any>>,
  formSubmit: React.FormEventHandler<HTMLFormElement>
}

const EmailForm = ( {setFunction, formSubmit}: props ) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, set: React.Dispatch<React.SetStateAction<any>>) => {
    const { name, value } = event.target;
    set((prev: any) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  return (

    <form
      id="email-form"
      className="flex flex-col w-1/3 p-8 gap-y-8 items-center"
      onSubmit={formSubmit}
    >
      <span className="text-sm self-start">* = required</span>

      <div id="email-form-name" className="form-item-container">

        <label
          htmlFor="name"
        >Name*</label>

        <input
          name="name"
          placeholder="Enter your name"
          className="form-input"
          onChange={(event) => handleChange(event, setFunction)}
        />

      </div>

      <div id="email-form-email" className="form-item-container">

        <label
          htmlFor="email"
        >Email*</label>

        <input
          name="email"
          placeholder="Enter your Email"
          className="form-input"
          onChange={(event) => handleChange(event, setFunction)}
        />

      </div>
      
      <div id="email-form-subject" className="form-item-container">

        <label
          htmlFor="subject"
        >Subject*</label>

        <input
          name="subject"
          placeholder="Email Subject"
          className="form-input"
          onChange={(event) => handleChange(event, setFunction)}
        />

      </div>

      <div id="email-form-body" className="form-item-container">

        <label
          htmlFor="body"
        >Message*</label>

        <textarea
          name="body"
          placeholder="Email Message"
          className="form-input"
          onChange={(event) => handleChange(event, setFunction)}
          rows={5}
        ></textarea>

      </div>


      <button
        type="submit"
        className="p-4 w-1/2 rounded-xl bg-brand cursor-pointer"
      >Send Email</button>

    </form>
  )
}

export default EmailForm