const ConceptsCard = (props) => {
  const cssId = props.id;
  return <ul id={cssId}>{props.children}</ul>;
};

export default ConceptsCard;
