export default function GetAQuote() {
  return (
    <div>
      <form method="POST" action="justicehemming@gmail.com">
        <div>
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label>Subject</label>
          <input type="text" name="subject" />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Send message</button>
      </form>
    </div>
  );
}
