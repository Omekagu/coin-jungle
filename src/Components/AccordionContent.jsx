import React from 'react';
import Accordion from './Accordion';

const AccordionContent = () => {
  return (
    <div>
      <Accordion
        title={'resources'}
        children={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia autem nihil? Consectetur voluptatum cumque deleniti itaque quis. Est, perspiciatis officia? Commodi ab perferendis repellat dignissimos. Nostrum quia quo eligendi.'
        }
      />
      <Accordion
        title={'donations'}
        children={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia autem nihil? Consectetur voluptatum cumque deleniti itaque quis. Est, perspiciatis officia? Commodi ab perferendis repellat dignissimos. Nostrum quia quo eligendi.Duis aute irure dolor in '
        }
      />
      <Accordion
        title={'supports'}
        children={
          'DuLorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia autem nihil? Consectetur voluptatum cumque deleniti itaque quis. Est, perspiciatis officia? Commodi ab perferendis repellat dignissimos. Nostrum quia quo eligendi.is aute irure dolor in '
        }
      />
      <Accordion
        title={'about coinjungle'}
        children={
          'Duis aute irure doloLorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia autem nihil? Consectetur voluptatum cumque deleniti itaque quis. Est, perspiciatis officia? Commodi ab perferendis repellat dignissimos. Nostrum quia quo eligendi.r in '
        }
      />
      <Accordion
        title={'community'}
        children={
          'DuLorem ipsum dolor sit amet consectetur adipisicing elit. Quas quia autem nihil? Consectetur voluptatum cumque deleniti itaque quis. Est, perspiciatis officia? Commodi ab perferendis repellat dignissimos. Nostrum quia quo eligendi.is aute irure dolor in '
        }
      />
    </div>
  );
};

export default AccordionContent;
