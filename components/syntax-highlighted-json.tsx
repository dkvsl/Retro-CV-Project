interface SyntaxHighlightedJSONProps {
  data: any;
}

export function SyntaxHighlightedJSON({ data }: SyntaxHighlightedJSONProps) {
  const formatValue = (key: string, value: any, indent: number): JSX.Element => {
    const spaces = '  '.repeat(indent);
    
    if (typeof value === 'string') {
      return (
        <div className="ml-4">
          <span className="text-[#e6b450]">"{key}"</span>
          <span className="text-white">: </span>
          <span className="text-[#7fd962]">"{value}"</span>
          <span className="text-white">,</span>
        </div>
      );
    }
    
    if (Array.isArray(value)) {
      return (
        <div>
          <div className="ml-4">
            <span className="text-[#e6b450]">"{key}"</span>
            <span className="text-white">: [</span>
          </div>
          {value.map((item, index) => (
            <div key={index} className="ml-8">
              {typeof item === 'string' ? (
                <>
                  <span className="text-[#7fd962]">"{item}"</span>
                  <span className="text-white">{index < value.length - 1 ? ',' : ''}</span>
                </>
              ) : (
                formatValue(index.toString(), item, indent + 1)
              )}
            </div>
          ))}
          <div className="ml-4"><span className="text-white">],</span></div>
        </div>
      );
    }
    
    if (typeof value === 'object' && value !== null) {
      return (
        <div>
          <div className="ml-4">
            <span className="text-[#e6b450]">"{key}"</span>
            <span className="text-white">: {'{'}
            </span>
          </div>
          {Object.entries(value).map(([k, v], index, arr) => (
            <div key={k}>
              {formatValue(k, v, indent + 1)}
            </div>
          ))}
          <div className="ml-4">
            <span className="text-white">{'}'}{indent > 0 ? ',' : ''}</span>
          </div>
        </div>
      );
    }
    
    return (
      <div className="ml-4">
        <span className="text-[#e6b450]">"{key}"</span>
        <span className="text-white">: </span>
        <span className="text-[#7fd962]">{JSON.stringify(value)}</span>
        <span className="text-white">,</span>
      </div>
    );
  };

  return (
    <div className="font-mono text-sm">
      <span className="text-[#ff7b72]">const</span>
      <span className="text-white"> experience = </span>
      {formatValue("", data, 0)}
    </div>
  );
}

