interface Params {
  text: string;
  position: 'top' | 'bottom' | 'right' | 'left';
}

const tooltip = (node: HTMLElement, params: Params) => {
  let tooltipEle: HTMLDivElement | null;

  const handleMouseOver = () => {
    const div = document.createElement('div');
    const nodePosition = node.getBoundingClientRect();
    const left = nodePosition.left;
    const top = nodePosition.bottom;

    tooltipEle = Object.assign(div, {
      innerText: params.text,
      style: `
	position: absolute;
        left: ${left}px;
	top: ${top}px;
	padding: 4px;
	color: white;
	background-color: black;
        z-index: 9999;
      `
    });

    tooltipEle && document.body.appendChild(tooltipEle);
  };

  const handleMouseOut = () => {
    if (tooltipEle) {
      tooltipEle.remove();
      tooltipEle = null;
    }
  };

  node.addEventListener('mouseover', handleMouseOver);

  node.addEventListener('mouseout', handleMouseOut);

  return {
    destroy() {
      node.removeEventListener('mouseover', handleMouseOver);

      node.removeEventListener('mouseout', handleMouseOut);

      if (tooltipEle) {
        tooltipEle.remove();
        tooltipEle = null;
      }
    }
  };
};

export default tooltip;
