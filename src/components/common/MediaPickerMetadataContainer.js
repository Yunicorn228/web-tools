import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import DataCard from './DataCard';
import MetadataPickerContainer from './MetadataPickerContainer';
import MetadataCheckboxFieldArray from './MetadataCheckboxFieldArray';
import messages from '../../resources/messages';

const MediaPickerMetadataContainer = props => (
  <div className="explorer-media-picker-metadata-types">
    <DataCard>
      <MetadataPickerContainer
        id={props.id}
        name={props.type}
        form="advanced-media-picker-search"
        label={props.label}
        onChange={args => props.onChange(props.id, args, props.type)}
        onSearch={props.onSearch}
        async
      />
      <h5>{props.intl.formatMessage(messages.frequentlyUsed)}</h5>
      <MetadataCheckboxFieldArray
        id={props.id}
        type={props.type}
        form="advanced-media-picker-search"
        label={props.label}
        onChange={args => props.onChange(props.id, args, props.type)}
        onSearch={props.onSearch}
        previouslySelected={props.previouslySelectedTags}
      />
    </DataCard>
  </div>
);

MediaPickerMetadataContainer.propTypes = {
  // from parent
  intl: PropTypes.object.isRequired,
  id: PropTypes.number,
  label: PropTypes.string,
  type: PropTypes.string,
  initialValues: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  previouslySelectedTags: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
};

const mapStateToProps = state => ({
  fetchStatus: state.system.metadata.mediaType.fetchStatus,
});

export default
injectIntl(
  connect(mapStateToProps)(
    MediaPickerMetadataContainer
  ),
);