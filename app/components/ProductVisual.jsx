export default function ProductVisual({ type }) {
  if (type === "sources") {
    return (
      <div aria-hidden="true" className="product-visual product-visual-sources">
        <span className="visual-source">DB</span>
        <span className="visual-source">API</span>
        <span className="visual-source">FILE</span>
        <span className="visual-hub">GS</span>
        <span className="visual-output">SERVICE</span>
      </div>
    );
  }

  if (type === "protocols") {
    return (
      <div aria-hidden="true" className="product-visual product-visual-protocols">
        <span>REST</span>
        <span>GRAPHQL</span>
        <span>gRPC</span>
        <span>SOAP</span>
      </div>
    );
  }

  if (type === "flows") {
    return (
      <div aria-hidden="true" className="product-visual product-visual-flows">
        <span>EVENT</span>
        <i />
        <span>FLOW</span>
        <i />
        <span>RESULT</span>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="product-visual product-visual-artifacts">
      <span>src</span>
      <span>env</span>
      <span>docker</span>
      <span>docs</span>
    </div>
  );
}
