System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, systemEvent, SystemEvent, _dec, _class, _temp, _crd, ccclass, property, PlayerController;

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

      ({
        ccclass,
        property
      } = _decorator);

      _export("PlayerController", PlayerController = (_dec = ccclass("PlayerController"), _dec(_class = (_temp = class PlayerController extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_startJump", false);

          _defineProperty(this, "_jumpStep", 0);

          _defineProperty(this, "_curJumpTime", 0);

          _defineProperty(this, "_jumpTime", 0.1);

          _defineProperty(this, "_curJumpSpeed", 0);

          _defineProperty(this, "_curPos", new Vec3());

          _defineProperty(this, "_deltaPos", new Vec3(0, 0, 0));

          _defineProperty(this, "_targetPos", new Vec3());

          _defineProperty(this, "_isMoving", false);
        }

        start() {
          // Your initialization goes here.
          systemEvent.on(SystemEvent.EventType.MOUSE_UP, this.onMouseUp, this);
        }

        onMouseUp(event) {
          if (event.getButton() === 0) {
            this.jumpByStep(1);
          } else if (event.getButton() === 2) {
            this.jumpByStep(2);
          }
        }

        jumpByStep(step) {
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
        }

        onOnceJumpEnd() {
          this._isMoving = false;
        }

        update(deltaTime) {
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
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PlayerController.js.map