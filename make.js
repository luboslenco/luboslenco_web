let fs = require('fs');

// rss.xml
{
	let rss = `<?xml version="1.0" encoding="UTF-8" ?>
	<rss version="2.0">
	<channel>
		<title>lubos-lenco-blog</title>
		<link>https://luboslenco.com/blog</link>
		<description>3D Content Creation Tools</description>
	`;

	let news = fs.readFileSync("blog.html", "utf8");
	let h3s = news.split(`<h3>`);
	let items = [];
	h3s.shift();
	h3s.shift();
	for (let h3 of h3s) {
		items.push(h3.split("</h3>")[0]);
	}

	for (let item of items) {
		rss += `
			<item>
	    		<title>lubos-lenco-blog</title>
	    		<link>https://luboslenco.com/blog</link>
	    		<description>${item}</description>
			</item>

		`;
	}

	rss += `
	</channel>
	</rss>
	`;

	fs.writeFileSync('rss.xml', rss);
}
