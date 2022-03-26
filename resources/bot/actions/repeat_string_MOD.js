export default {
  name: "Repeat String",
  section: "Other Stuff",

  variableStorage(data, varType) {
    if (parseInt(data.storage, 10) !== varType) return;
    return [data.varName, "String"];
  },

  fields: ["storage", "varName", "girdi", "xtimes"],

  html(_isEvent, data) {
    return `
<div>
  <div>
    String:<br>
    <input placeholder="Text or variable" id="girdi" class="round" type="text">
  </div><br>
  <div>
    Times:<br>
    <input placeholder="Number or variable" id="xtimes" class="round" type="text">
  </div>
</div><br>
<div>
  <div style="float: left; width: 35%;">
    Store In:<br>
    <select id="storage" class="round">
      ${data.variables[1]}
    </select>
  </div>
  <div id="varNameContainer" style="float: right; width: 60%;">
    Variable Name:<br>
    <input id="varName" class="round" type="text">
  </div>
</div>`;
  },

  init() {},

  /** @this {import("../utils/Actions.js").default} */
  action(cache) {
    const data = cache.actions[cache.index];
    const type = parseInt(data.storage, 10);
    const varName = this.evalMessage(data.varName, cache);
    const girdi = this.evalMessage(data.girdi, cache);
    const xtimes = this.evalMessage(data.xtimes, cache);

    this.storeValue(girdi.repeat(Number(xtimes)), type, varName, cache);
    this.callNextAction(cache);
  },

  mod() {},
};
