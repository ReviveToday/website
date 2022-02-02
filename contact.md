---
title: Contact us
layout: page
---

Fields marked with an asterisk (*) are required.

<form method="POST" action="https://api.slapform.com/QLCDWe0HD">
	<input type="text" name="slap_honey" hidden>
	<div class="row mb-2">
		<div class="col">
			<label for="name">Your name</label>
			<input type="text" class="form-control" id="name" aria-describedby="name" placeholder="Bobby Tables">
		</div>
		<div class="col">
			<label for="email">Email address*</label>
			<input type="email" class="form-control" id="email" aria-describedby="email" placeholder="example@hotmail.com" required>
		</div>
	</div>
	<div class="form-group my-2">
		<label for="reason">Reason for Contact*</label>
		<select name="reason" aria-describedby="reason" class="form-control" required>
			<option value="suggestion" selected="selected">Tip off / Content suggestion</option>
			<option value="support">Support</option>
			<option value="misc">Miscellaneous</option>
		</select>
	</div>
	<div class="form-group my-2">
		<label for="message">Message*</label>
		<textarea name="message" class="form-control" rows="6" required></textarea>
		<small id="message" class="form-text text-muted">For content tip-offs, if you wish to be credited, please specify.</small>
	</div>
	<button type="submit" class="btn btn-primary my-2">Submit</button>
</form>
