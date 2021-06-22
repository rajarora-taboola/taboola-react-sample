import React from 'react';
import PropTypes from 'prop-types';

const currentView = {
	view: '',
	setView: function(view) {
		this.view = view;
	},
	getView: function() {
		return this.view;
	},
};

class Taboola extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			containerId: null,
		};
	}

	shouldPushNewPage() {
		const { currentUrl } = this.props;
		// if this is a new URL and the currentUrl is not an empty string (meaning it is the first page loaded),
		// we should push the notify-new-page event and the currentUrl
		return currentView.getView() !== '' && currentView.getView() !== currentUrl;
	}

	onPageLoad() {
		const { pageType, currentUrl } = this.props;

		// if it is a new page, notify a new page has loaded
		if (this.shouldPushNewPage()) {
			window._taboola.push({ notify: 'newPageLoad' });
		}

		// if it's a new page, pass the new url, else pass the page type
		const topInfo = this.shouldPushNewPage()
			? { [pageType]: 'auto', url: currentUrl }
			: { [pageType]: 'auto' };

		window._taboola = window._taboola || [];
		window._taboola.push(topInfo);

		// finally, mark this page as seen
		currentView.setView(currentUrl);
	}

	loadWidget({ mode, placement, targetType, containerId }) {
		try {
			window._taboola = window._taboola || [];
			window._taboola.push({
				mode,
				container: containerId,
				placement,
				target_type: targetType,
			});

			window._taboola.push({flush: true});
		} catch (e) {
			console.log('Error in react taboola plugin: ' + e.message);
		}
	}

	formatContainerId(placement) {
		const saltedPlacement = `${placement}-${Math.floor(
			Math.random() * 100000
		)}`;
		return saltedPlacement
			.toLowerCase()
			.split(' ')
			.join('-');
	}

	componentDidMount() {
		try {
			this.onPageLoad();
		} catch (e) {
			console.log('Error in taboola-react-plugin: ', e.message);
		} finally {
			this.setState({
				containerId: this.formatContainerId(this.props.placement),
			},
			function() {
				const { mode, placement, targetType } = this.props;
				const { containerId } = this.state;
				{containerId &&
					this.loadWidget({ mode, placement, targetType, containerId })}
			});
		}
	}

	render() {
		const { containerId } = this.state;
		return (
			<React.Fragment>
				{containerId && <div id={containerId} />}
			</React.Fragment>
		);
	}
}
Taboola.propTypes = {
	currentUrl: PropTypes.string.isRequired,
	mode: PropTypes.string.isRequired,
	pageType: PropTypes.string.isRequired,
	placement: PropTypes.string.isRequired,
	targetType: PropTypes.string.isRequired,
};
export default Taboola;