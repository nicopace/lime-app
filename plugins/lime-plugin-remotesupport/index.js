import {h} from 'preact';
import I18n from 'i18n-js';
import RemoteSupportPage from './src/remoteSupportPage';

export default {
	name: 'remotesupport',
	page: RemoteSupportPage,
	menu: () => <a href={'#/remotesupport'}>{I18n.t('Remote Support')}</a>,
	isCommunityProtected: true,
	additionalRoutes: [
	]
}

