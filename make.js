let fs = require('fs');

// rss.xml
{
	let rss = `<?xml version="1.0" encoding="UTF-8" ?>
	<rss version="2.0">
	<channel>
		<title>lubos-lenco</title>
		<link>https://luboslenco.com</link>
		<description>Lubos' Log</description>
	`;

	let index = fs.readFileSync("index.html", "utf8");
	let divs = index.split(`<div id="rss">`);
	divs.shift();
	let items = [];
	for (let div of divs) {
		items.push(div.split("</div>")[0]);
	}

	for (let item of items) {
		rss += `
			<item>
	    		<title>Lubos' Log</title>
	    		<link>https://luboslenco.com</link>
	    		<description>${item}
	    		</description>
			</item>

		`;
	}

	rss += `
	</channel>
	</rss>
	`;

	fs.writeFileSync('rss.xml', rss);
}
