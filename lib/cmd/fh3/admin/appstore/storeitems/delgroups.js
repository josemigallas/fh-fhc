/* globals i18n */

var fhreq = require("../../../../../utils/request");
var common = require("../../../../../common");

module.exports = {
  'desc' : i18n._('Delete group from the restrictions of the store item'),
  'examples' : [{
    cmd : 'fhc admin appstore storeitems delgroups --id=<id> --group=<group>',
    desc : i18n._('Delete <group> from the restrictions of the store item with <id>')
  }],
  'demand' : ['id','group'],
  'alias' : {
    'id' : 'i',
    'group' : 'g',
    0 :'id',
    1 :'group'
  },
  'describe' : {
    'id' : i18n._("Unique 24 character GUID of the store item."),
    'group' : i18n._("Unique 24 character GUID of the group.")
  },
  'customCmd': function(params, cb) {
    common.doApiCall(fhreq.getFeedHenryUrl(), "/box/srv/1.1/admin/storeitem/removegroups", {"guid": params.id,  groups: [params.group]}, i18n._("Error removing groups from storeitem: "), cb);
  }
};
