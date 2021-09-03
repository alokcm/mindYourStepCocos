System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, systemEvent, SystemEvent, _dec, _class, _temp, _crd, ccclass, property, PlayerController;

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3437JC8Q5AuIjYuHa7+oOP", "PlayerController", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PlayerController", PlayerController = (_dec = ccclass("PlayerController"), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(PlayerController, _Component);

        function PlayerController() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _defineProperty(_assertThisInitialized(_this), "_startJump", false);

          _defineProperty(_assertThisInitialized(_this), "_jumpStep", 0);

          _defineProperty(_assertThisInitialized(_this), "_curJumpTime", 0);

          _defineProperty(_assertThisInitialized(_this), "_jumpTime", 0.1);

          _defineProperty(_assertThisInitialized(_this), "_curJumpSpeed", 0);

          _defineProperty(_assertThisInitialized(_this), "_curPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_deltaPos", new Vec3(0, 0, 0));

          _defineProperty(_assertThisInitialized(_this), "_targetPos", new Vec3());

          _defineProperty(_assertThisInitialized(_this), "_isMoving", false);

          return _this;
        }

        var _proto = PlayerController.prototype;

        _proto.start = function start() {
          // Your initialization goes here.
          systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
        };

        _proto.onMouseUp = function onMouseUp(event) {
          if (event.getButton() === 0) {
            this.jumpByStep(1);
          } else if (event.getButton() === 2) {
            this.jumpByStep(2);
          }
        };

        _proto.jumpByStep = function jumpByStep(step) {
          if (this._isMoving) {
            return;
          }

          this._startJump = true;
          this._jumpStep = step;
          this._curJumpTime = 0;
          this._curJumpSpeed = this._jumpStep / this._jumpTime;
          this.node.getPosition(this._curPos);
          Vec3.add(this._targetPos, this._curPos, new Vec3(this._jumpStep, 0, 0));
          this._isMoving = true;
        };

        _proto.onOnceJumpEnd = function onOnceJumpEnd() {
          this._isMoving = false;
        };

        _proto.update = function update(deltaTime) {
          if (this._startJump) {
            this._curJumpTime += deltaTime;

            if (this._curJumpTime > this._jumpTime) {
              // end
              this.node.setPosition(this._targetPos);
              this._startJump = false;
              this.onOnceJumpEnd();
            } else {
              // tween
              this.node.getPosition(this._curPos);
              this._deltaPos.x = this._curJumpSpeed * deltaTime;
              Vec3.add(this._curPos, this._curPos, this._deltaPos);
              this.node.setPosition(this._curPos);
            }
          }
        };

        return PlayerController;
      }(Component), _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PlayerController.js.map