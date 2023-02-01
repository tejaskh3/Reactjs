Doubts and problem faced



documentations. and course flow

1.we can use react js in our browser using script but that is not good for deployment. for that need to nps create-react-app <name> if it has already been done first delete it.

-> this genrated an environment in our local computer now simply do npm start and your first react web will get hosted at your browser.

2.delete every file from src expect index.js
and cleaned index.js as well

->index.js is an javascript entry point (import +function)

-> connect this index.js to indedx.html (by div having a class named root) using dependency react-dom
and than render it.

->used ReactDom.render(<functionname/>, document.getelementbyId('root')) than it worked. and that's how i created my first component.
or use <fucntion></function>
for image the above one is prefered 
⭐By using a self-closing tag, you are telling React that the component does not have any children.

