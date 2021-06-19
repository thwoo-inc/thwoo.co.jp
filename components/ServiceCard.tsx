import React from 'react';

const ServiceCard = (props) => {
  return (
    <div className="flex flex-col justify-content rounded-lg bg-gray-50 shadow-xl p-8">
      <h3 className="mx-auto mb-8 text-xl tracking-wider font-bold">
        {props.title}
      </h3>
      <div className="w-1/2 mx-auto mb-8">{props.children}</div>
      <div className="flex-shrink">
        {props.items.map((item) => (
          <div key={item.title} className="mb-4">
            <h4 className="mb-2 font-bold">{item.title}</h4>
            <p className="text-sm ml-2 mb-1">{item.description}</p>
            {item.linkText && item.linkUrl && (
              <a
                className="text-sm ml-2 text-right underline"
                href={item.linkUrl}
              >
                {item.linkText}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
