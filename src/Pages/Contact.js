export default `
<form action="//formspree.io/gosiddhi03@gmail.com" method="POST">
<input type="text" name="firstname" required="First Name" size="100" autofocus>
<input type="text" name="lastname" required="Last Name" size="100">
<input type="email" name="userEmail" placeholder="your.email@example.com">

<label>What's this message about?
  <input type="radio" name="subject" required="professional" checked><span>I'd like to hire you!</span>
  <input type="radio" name="subject" required="personal" checked><span>Personal message</span>
  <input type="radio" name="subject" required="other" checked><span>Don't know/something else</span>
</label>

<input type="checkbox" name="optin" value="trusting" checked>Subscribe me to your newsletter!
<input type="checkbox" name="optout" value="skeptical" disabled>Cheeky checkbox...

<label for="marketing">How did you hear about me?</label>
<select name="marketing">
  <optgroup label="Online">
    <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
    <option value="github">Online Portfolio (GitHub)</option>
    <option value="search">Search Engine</option>
    <option value="email">Email</option>
  </optgroup>
  <optgroup label="In-Person">
    <option value="networking">We met at a networking event</option>
    <option value="referral">Personal referral</option>
    <option value="random">We met somewhere else</option>
  </optgroup>
  <option value="other">Other</option>
</select>

<textarea name="user_message" rows="8" cols="40"></textarea>
<input type="submit">
</form>
`;