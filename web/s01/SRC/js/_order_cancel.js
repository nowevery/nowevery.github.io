document.writeln('<div class="order-jump O-c-j" action="">');
document.writeln('	<div class="order-jump-inner">');
document.writeln('		<div class="jump-x">X</div>');
document.writeln('		<div class="m-scroll">');
document.writeln('			<form>');
document.writeln('				<div class="title">取消訂單</div>');
document.writeln('				<div class="form_flex l-30"><span>姓名</span>張先生</div>');
document.writeln('				<div class="form_flex">');
document.writeln('					<input type="email" name="email" placeholder="Email">');
document.writeln('				</div>');
document.writeln('				<div class="form_flex">');
document.writeln('					<input onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" placeholder="聯絡電話">');
document.writeln('				</div>');
document.writeln('				<div class="form_flex">');
document.writeln('					<textarea placeholder="取消原因"></textarea>');
document.writeln('				</div>');
document.writeln('				<div class="f-s">');
document.writeln('					<button type="reset" class="btn s1">重新填寫</button>');
document.writeln('					<button type="submit" class="btn s2">確定取消</button>');
document.writeln('				</div>		');
document.writeln('			</form>');
document.writeln('		</div>	');
document.writeln('	</div>');
document.writeln('</div>');
document.writeln('');
