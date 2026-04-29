(function () {
  var KEY = "qb1-pack-checklist-v1";
  var inputs = document.querySelectorAll("input[data-pack-key]");
  if (!inputs.length) return;

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return {};
      var data = JSON.parse(raw);
      return data && typeof data === "object" ? data : {};
    } catch (e) {
      return {};
    }
  }

  function save(state) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch (e) {}
  }

  var state = load();

  inputs.forEach(function (input) {
    var k = input.getAttribute("data-pack-key");
    if (!k) return;
    if (state[k]) input.checked = true;

    input.addEventListener("change", function () {
      var s = load();
      if (input.checked) s[k] = true;
      else delete s[k];
      save(s);
    });
  });
})();
