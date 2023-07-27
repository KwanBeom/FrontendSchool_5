function createElement(tag, props, ...children) {
  if (typeof tag === "function") {
    return tag.apply(null, [props, ...children]);
  }

  return { tag, props, children };
}

function renderDom(vDom) {
  const parent = document.createElement(vDom.tag);
  for (let i = 0; i < vDom.children.length; i++) {
    const child = vDom.children[i];
    const el = document.createElement(child.tag);
    if (child.props) el.classList.add(child.props.className);
    el.textContent = child.children[0];
    parent.append(el);
  }
  return parent;
}

function render(element, container) {
  container.append(renderDom(element));
}

export { createElement, render };
