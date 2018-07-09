import * as React from 'react';
import {IDebugProps} from './IDebug';
import FormConsumer from '../../providers/Form/FormConsumer';
import {IFormContext} from '../../providers/Form/IFormContext';

const Debug: React.SFC<IDebugProps> = props => (
  <FormConsumer>
    {({form}: IFormContext) => (
      <pre {...props}>
        {Object.entries(form.fields).map(([idx, field]) => (
          <div key={idx}>
            {field.label} <strong>{field.value}</strong>
          </div>
        ))}
      </pre>
    )}
  </FormConsumer>
);

export default Debug;
