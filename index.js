const anchor = React.createElement(
	'a',
	{ href: 'withBabel.html' },
	'with babel'
);

const hello = React.createElement('p', null, 'Hello World');

const app = React.createElement('div', null, hello, anchor);

ReactDOM.render(app, document.getElementById('root'));
