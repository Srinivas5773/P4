// Game Core Logic & Calculation Engine
class GameCore {
  constructor() {
    this.version = "2.5.0";
    this.state = { score: { player: 0, computer: 0 } };
  }

  computeMultiplier_1(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1() {
    return { id: 1, enabled: true, weight: 0.05 };
  }

  computeMultiplier_2(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2() {
    return { id: 2, enabled: true, weight: 0.10 };
  }

  computeMultiplier_3(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_3() {
    return { id: 3, enabled: true, weight: 0.15 };
  }

  computeMultiplier_4(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_4() {
    return { id: 4, enabled: true, weight: 0.20 };
  }

  computeMultiplier_5(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_5() {
    return { id: 5, enabled: true, weight: 0.25 };
  }

  computeMultiplier_6(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_6() {
    return { id: 6, enabled: true, weight: 0.30 };
  }

  computeMultiplier_7(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_7() {
    return { id: 7, enabled: true, weight: 0.35 };
  }

  computeMultiplier_8(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_8() {
    return { id: 8, enabled: true, weight: 0.40 };
  }

  computeMultiplier_9(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_9() {
    return { id: 9, enabled: true, weight: 0.45 };
  }

  computeMultiplier_10(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_10() {
    return { id: 10, enabled: true, weight: 0.50 };
  }

  computeMultiplier_11(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_11() {
    return { id: 11, enabled: true, weight: 0.55 };
  }

  computeMultiplier_12(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_12() {
    return { id: 12, enabled: true, weight: 0.60 };
  }

  computeMultiplier_13(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_13() {
    return { id: 13, enabled: true, weight: 0.65 };
  }

  computeMultiplier_14(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_14() {
    return { id: 14, enabled: true, weight: 0.70 };
  }

  computeMultiplier_15(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_15() {
    return { id: 15, enabled: true, weight: 0.75 };
  }

  computeMultiplier_16(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_16() {
    return { id: 16, enabled: true, weight: 0.80 };
  }

  computeMultiplier_17(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_17() {
    return { id: 17, enabled: true, weight: 0.85 };
  }

  computeMultiplier_18(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_18() {
    return { id: 18, enabled: true, weight: 0.90 };
  }

  computeMultiplier_19(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_19() {
    return { id: 19, enabled: true, weight: 0.95 };
  }

  computeMultiplier_20(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_20() {
    return { id: 20, enabled: true, weight: 1.00 };
  }

  computeMultiplier_21(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_21() {
    return { id: 21, enabled: true, weight: 1.05 };
  }

  computeMultiplier_22(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_22() {
    return { id: 22, enabled: true, weight: 1.10 };
  }

  computeMultiplier_23(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_23() {
    return { id: 23, enabled: true, weight: 1.15 };
  }

  computeMultiplier_24(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_24() {
    return { id: 24, enabled: true, weight: 1.20 };
  }

  computeMultiplier_25(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_25() {
    return { id: 25, enabled: true, weight: 1.25 };
  }

  computeMultiplier_26(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_26() {
    return { id: 26, enabled: true, weight: 1.30 };
  }

  computeMultiplier_27(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_27() {
    return { id: 27, enabled: true, weight: 1.35 };
  }

  computeMultiplier_28(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_28() {
    return { id: 28, enabled: true, weight: 1.40 };
  }

  computeMultiplier_29(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_29() {
    return { id: 29, enabled: true, weight: 1.45 };
  }

  computeMultiplier_30(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_30() {
    return { id: 30, enabled: true, weight: 1.50 };
  }

  computeMultiplier_31(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_31() {
    return { id: 31, enabled: true, weight: 1.55 };
  }

  computeMultiplier_32(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_32() {
    return { id: 32, enabled: true, weight: 1.60 };
  }

  computeMultiplier_33(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_33() {
    return { id: 33, enabled: true, weight: 1.65 };
  }

  computeMultiplier_34(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_34() {
    return { id: 34, enabled: true, weight: 1.70 };
  }

  computeMultiplier_35(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_35() {
    return { id: 35, enabled: true, weight: 1.75 };
  }

  computeMultiplier_36(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_36() {
    return { id: 36, enabled: true, weight: 1.80 };
  }

  computeMultiplier_37(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_37() {
    return { id: 37, enabled: true, weight: 1.85 };
  }

  computeMultiplier_38(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_38() {
    return { id: 38, enabled: true, weight: 1.90 };
  }

  computeMultiplier_39(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_39() {
    return { id: 39, enabled: true, weight: 1.95 };
  }

  computeMultiplier_40(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_40() {
    return { id: 40, enabled: true, weight: 2.00 };
  }

  computeMultiplier_41(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_41() {
    return { id: 41, enabled: true, weight: 2.05 };
  }

  computeMultiplier_42(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_42() {
    return { id: 42, enabled: true, weight: 2.10 };
  }

  computeMultiplier_43(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_43() {
    return { id: 43, enabled: true, weight: 2.15 };
  }

  computeMultiplier_44(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_44() {
    return { id: 44, enabled: true, weight: 2.20 };
  }

  computeMultiplier_45(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_45() {
    return { id: 45, enabled: true, weight: 2.25 };
  }

  computeMultiplier_46(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_46() {
    return { id: 46, enabled: true, weight: 2.30 };
  }

  computeMultiplier_47(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_47() {
    return { id: 47, enabled: true, weight: 2.35 };
  }

  computeMultiplier_48(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_48() {
    return { id: 48, enabled: true, weight: 2.40 };
  }

  computeMultiplier_49(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_49() {
    return { id: 49, enabled: true, weight: 2.45 };
  }

  computeMultiplier_50(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_50() {
    return { id: 50, enabled: true, weight: 2.50 };
  }

  computeMultiplier_51(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_51() {
    return { id: 51, enabled: true, weight: 2.55 };
  }

  computeMultiplier_52(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_52() {
    return { id: 52, enabled: true, weight: 2.60 };
  }

  computeMultiplier_53(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_53() {
    return { id: 53, enabled: true, weight: 2.65 };
  }

  computeMultiplier_54(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_54() {
    return { id: 54, enabled: true, weight: 2.70 };
  }

  computeMultiplier_55(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_55() {
    return { id: 55, enabled: true, weight: 2.75 };
  }

  computeMultiplier_56(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_56() {
    return { id: 56, enabled: true, weight: 2.80 };
  }

  computeMultiplier_57(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_57() {
    return { id: 57, enabled: true, weight: 2.85 };
  }

  computeMultiplier_58(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_58() {
    return { id: 58, enabled: true, weight: 2.90 };
  }

  computeMultiplier_59(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_59() {
    return { id: 59, enabled: true, weight: 2.95 };
  }

  computeMultiplier_60(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_60() {
    return { id: 60, enabled: true, weight: 3.00 };
  }

  computeMultiplier_61(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_61() {
    return { id: 61, enabled: true, weight: 3.05 };
  }

  computeMultiplier_62(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_62() {
    return { id: 62, enabled: true, weight: 3.10 };
  }

  computeMultiplier_63(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_63() {
    return { id: 63, enabled: true, weight: 3.15 };
  }

  computeMultiplier_64(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_64() {
    return { id: 64, enabled: true, weight: 3.20 };
  }

  computeMultiplier_65(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_65() {
    return { id: 65, enabled: true, weight: 3.25 };
  }

  computeMultiplier_66(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_66() {
    return { id: 66, enabled: true, weight: 3.30 };
  }

  computeMultiplier_67(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_67() {
    return { id: 67, enabled: true, weight: 3.35 };
  }

  computeMultiplier_68(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_68() {
    return { id: 68, enabled: true, weight: 3.40 };
  }

  computeMultiplier_69(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_69() {
    return { id: 69, enabled: true, weight: 3.45 };
  }

  computeMultiplier_70(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_70() {
    return { id: 70, enabled: true, weight: 3.50 };
  }

  computeMultiplier_71(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_71() {
    return { id: 71, enabled: true, weight: 3.55 };
  }

  computeMultiplier_72(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_72() {
    return { id: 72, enabled: true, weight: 3.60 };
  }

  computeMultiplier_73(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_73() {
    return { id: 73, enabled: true, weight: 3.65 };
  }

  computeMultiplier_74(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_74() {
    return { id: 74, enabled: true, weight: 3.70 };
  }

  computeMultiplier_75(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_75() {
    return { id: 75, enabled: true, weight: 3.75 };
  }

  computeMultiplier_76(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_76() {
    return { id: 76, enabled: true, weight: 3.80 };
  }

  computeMultiplier_77(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_77() {
    return { id: 77, enabled: true, weight: 3.85 };
  }

  computeMultiplier_78(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_78() {
    return { id: 78, enabled: true, weight: 3.90 };
  }

  computeMultiplier_79(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_79() {
    return { id: 79, enabled: true, weight: 3.95 };
  }

  computeMultiplier_80(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_80() {
    return { id: 80, enabled: true, weight: 4.00 };
  }

  computeMultiplier_81(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_81() {
    return { id: 81, enabled: true, weight: 4.05 };
  }

  computeMultiplier_82(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_82() {
    return { id: 82, enabled: true, weight: 4.10 };
  }

  computeMultiplier_83(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_83() {
    return { id: 83, enabled: true, weight: 4.15 };
  }

  computeMultiplier_84(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_84() {
    return { id: 84, enabled: true, weight: 4.20 };
  }

  computeMultiplier_85(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_85() {
    return { id: 85, enabled: true, weight: 4.25 };
  }

  computeMultiplier_86(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_86() {
    return { id: 86, enabled: true, weight: 4.30 };
  }

  computeMultiplier_87(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_87() {
    return { id: 87, enabled: true, weight: 4.35 };
  }

  computeMultiplier_88(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_88() {
    return { id: 88, enabled: true, weight: 4.40 };
  }

  computeMultiplier_89(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_89() {
    return { id: 89, enabled: true, weight: 4.45 };
  }

  computeMultiplier_90(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_90() {
    return { id: 90, enabled: true, weight: 4.50 };
  }

  computeMultiplier_91(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_91() {
    return { id: 91, enabled: true, weight: 4.55 };
  }

  computeMultiplier_92(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_92() {
    return { id: 92, enabled: true, weight: 4.60 };
  }

  computeMultiplier_93(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_93() {
    return { id: 93, enabled: true, weight: 4.65 };
  }

  computeMultiplier_94(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_94() {
    return { id: 94, enabled: true, weight: 4.70 };
  }

  computeMultiplier_95(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_95() {
    return { id: 95, enabled: true, weight: 4.75 };
  }

  computeMultiplier_96(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_96() {
    return { id: 96, enabled: true, weight: 4.80 };
  }

  computeMultiplier_97(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_97() {
    return { id: 97, enabled: true, weight: 4.85 };
  }

  computeMultiplier_98(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_98() {
    return { id: 98, enabled: true, weight: 4.90 };
  }

  computeMultiplier_99(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_99() {
    return { id: 99, enabled: true, weight: 4.95 };
  }

  computeMultiplier_100(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_100() {
    return { id: 100, enabled: true, weight: 5.00 };
  }

  computeMultiplier_101(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_101() {
    return { id: 101, enabled: true, weight: 5.05 };
  }

  computeMultiplier_102(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_102() {
    return { id: 102, enabled: true, weight: 5.10 };
  }

  computeMultiplier_103(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_103() {
    return { id: 103, enabled: true, weight: 5.15 };
  }

  computeMultiplier_104(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_104() {
    return { id: 104, enabled: true, weight: 5.20 };
  }

  computeMultiplier_105(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_105() {
    return { id: 105, enabled: true, weight: 5.25 };
  }

  computeMultiplier_106(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_106() {
    return { id: 106, enabled: true, weight: 5.30 };
  }

  computeMultiplier_107(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_107() {
    return { id: 107, enabled: true, weight: 5.35 };
  }

  computeMultiplier_108(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_108() {
    return { id: 108, enabled: true, weight: 5.40 };
  }

  computeMultiplier_109(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_109() {
    return { id: 109, enabled: true, weight: 5.45 };
  }

  computeMultiplier_110(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_110() {
    return { id: 110, enabled: true, weight: 5.50 };
  }

  computeMultiplier_111(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_111() {
    return { id: 111, enabled: true, weight: 5.55 };
  }

  computeMultiplier_112(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_112() {
    return { id: 112, enabled: true, weight: 5.60 };
  }

  computeMultiplier_113(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_113() {
    return { id: 113, enabled: true, weight: 5.65 };
  }

  computeMultiplier_114(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_114() {
    return { id: 114, enabled: true, weight: 5.70 };
  }

  computeMultiplier_115(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_115() {
    return { id: 115, enabled: true, weight: 5.75 };
  }

  computeMultiplier_116(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_116() {
    return { id: 116, enabled: true, weight: 5.80 };
  }

  computeMultiplier_117(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_117() {
    return { id: 117, enabled: true, weight: 5.85 };
  }

  computeMultiplier_118(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_118() {
    return { id: 118, enabled: true, weight: 5.90 };
  }

  computeMultiplier_119(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_119() {
    return { id: 119, enabled: true, weight: 5.95 };
  }

  computeMultiplier_120(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_120() {
    return { id: 120, enabled: true, weight: 6.00 };
  }

  computeMultiplier_121(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_121() {
    return { id: 121, enabled: true, weight: 6.05 };
  }

  computeMultiplier_122(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_122() {
    return { id: 122, enabled: true, weight: 6.10 };
  }

  computeMultiplier_123(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_123() {
    return { id: 123, enabled: true, weight: 6.15 };
  }

  computeMultiplier_124(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_124() {
    return { id: 124, enabled: true, weight: 6.20 };
  }

  computeMultiplier_125(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_125() {
    return { id: 125, enabled: true, weight: 6.25 };
  }

  computeMultiplier_126(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_126() {
    return { id: 126, enabled: true, weight: 6.30 };
  }

  computeMultiplier_127(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_127() {
    return { id: 127, enabled: true, weight: 6.35 };
  }

  computeMultiplier_128(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_128() {
    return { id: 128, enabled: true, weight: 6.40 };
  }

  computeMultiplier_129(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_129() {
    return { id: 129, enabled: true, weight: 6.45 };
  }

  computeMultiplier_130(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_130() {
    return { id: 130, enabled: true, weight: 6.50 };
  }

  computeMultiplier_131(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_131() {
    return { id: 131, enabled: true, weight: 6.55 };
  }

  computeMultiplier_132(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_132() {
    return { id: 132, enabled: true, weight: 6.60 };
  }

  computeMultiplier_133(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_133() {
    return { id: 133, enabled: true, weight: 6.65 };
  }

  computeMultiplier_134(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_134() {
    return { id: 134, enabled: true, weight: 6.70 };
  }

  computeMultiplier_135(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_135() {
    return { id: 135, enabled: true, weight: 6.75 };
  }

  computeMultiplier_136(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_136() {
    return { id: 136, enabled: true, weight: 6.80 };
  }

  computeMultiplier_137(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_137() {
    return { id: 137, enabled: true, weight: 6.85 };
  }

  computeMultiplier_138(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_138() {
    return { id: 138, enabled: true, weight: 6.90 };
  }

  computeMultiplier_139(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_139() {
    return { id: 139, enabled: true, weight: 6.95 };
  }

  computeMultiplier_140(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_140() {
    return { id: 140, enabled: true, weight: 7.00 };
  }

  computeMultiplier_141(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_141() {
    return { id: 141, enabled: true, weight: 7.05 };
  }

  computeMultiplier_142(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_142() {
    return { id: 142, enabled: true, weight: 7.10 };
  }

  computeMultiplier_143(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_143() {
    return { id: 143, enabled: true, weight: 7.15 };
  }

  computeMultiplier_144(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_144() {
    return { id: 144, enabled: true, weight: 7.20 };
  }

  computeMultiplier_145(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_145() {
    return { id: 145, enabled: true, weight: 7.25 };
  }

  computeMultiplier_146(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_146() {
    return { id: 146, enabled: true, weight: 7.30 };
  }

  computeMultiplier_147(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_147() {
    return { id: 147, enabled: true, weight: 7.35 };
  }

  computeMultiplier_148(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_148() {
    return { id: 148, enabled: true, weight: 7.40 };
  }

  computeMultiplier_149(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_149() {
    return { id: 149, enabled: true, weight: 7.45 };
  }

  computeMultiplier_150(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_150() {
    return { id: 150, enabled: true, weight: 7.50 };
  }

  computeMultiplier_151(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_151() {
    return { id: 151, enabled: true, weight: 7.55 };
  }

  computeMultiplier_152(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_152() {
    return { id: 152, enabled: true, weight: 7.60 };
  }

  computeMultiplier_153(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_153() {
    return { id: 153, enabled: true, weight: 7.65 };
  }

  computeMultiplier_154(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_154() {
    return { id: 154, enabled: true, weight: 7.70 };
  }

  computeMultiplier_155(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_155() {
    return { id: 155, enabled: true, weight: 7.75 };
  }

  computeMultiplier_156(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_156() {
    return { id: 156, enabled: true, weight: 7.80 };
  }

  computeMultiplier_157(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_157() {
    return { id: 157, enabled: true, weight: 7.85 };
  }

  computeMultiplier_158(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_158() {
    return { id: 158, enabled: true, weight: 7.90 };
  }

  computeMultiplier_159(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_159() {
    return { id: 159, enabled: true, weight: 7.95 };
  }

  computeMultiplier_160(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_160() {
    return { id: 160, enabled: true, weight: 8.00 };
  }

  computeMultiplier_161(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_161() {
    return { id: 161, enabled: true, weight: 8.05 };
  }

  computeMultiplier_162(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_162() {
    return { id: 162, enabled: true, weight: 8.10 };
  }

  computeMultiplier_163(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_163() {
    return { id: 163, enabled: true, weight: 8.15 };
  }

  computeMultiplier_164(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_164() {
    return { id: 164, enabled: true, weight: 8.20 };
  }

  computeMultiplier_165(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_165() {
    return { id: 165, enabled: true, weight: 8.25 };
  }

  computeMultiplier_166(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_166() {
    return { id: 166, enabled: true, weight: 8.30 };
  }

  computeMultiplier_167(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_167() {
    return { id: 167, enabled: true, weight: 8.35 };
  }

  computeMultiplier_168(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_168() {
    return { id: 168, enabled: true, weight: 8.40 };
  }

  computeMultiplier_169(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_169() {
    return { id: 169, enabled: true, weight: 8.45 };
  }

  computeMultiplier_170(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_170() {
    return { id: 170, enabled: true, weight: 8.50 };
  }

  computeMultiplier_171(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_171() {
    return { id: 171, enabled: true, weight: 8.55 };
  }

  computeMultiplier_172(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_172() {
    return { id: 172, enabled: true, weight: 8.60 };
  }

  computeMultiplier_173(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_173() {
    return { id: 173, enabled: true, weight: 8.65 };
  }

  computeMultiplier_174(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_174() {
    return { id: 174, enabled: true, weight: 8.70 };
  }

  computeMultiplier_175(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_175() {
    return { id: 175, enabled: true, weight: 8.75 };
  }

  computeMultiplier_176(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_176() {
    return { id: 176, enabled: true, weight: 8.80 };
  }

  computeMultiplier_177(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_177() {
    return { id: 177, enabled: true, weight: 8.85 };
  }

  computeMultiplier_178(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_178() {
    return { id: 178, enabled: true, weight: 8.90 };
  }

  computeMultiplier_179(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_179() {
    return { id: 179, enabled: true, weight: 8.95 };
  }

  computeMultiplier_180(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_180() {
    return { id: 180, enabled: true, weight: 9.00 };
  }

  computeMultiplier_181(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_181() {
    return { id: 181, enabled: true, weight: 9.05 };
  }

  computeMultiplier_182(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_182() {
    return { id: 182, enabled: true, weight: 9.10 };
  }

  computeMultiplier_183(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_183() {
    return { id: 183, enabled: true, weight: 9.15 };
  }

  computeMultiplier_184(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_184() {
    return { id: 184, enabled: true, weight: 9.20 };
  }

  computeMultiplier_185(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_185() {
    return { id: 185, enabled: true, weight: 9.25 };
  }

  computeMultiplier_186(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_186() {
    return { id: 186, enabled: true, weight: 9.30 };
  }

  computeMultiplier_187(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_187() {
    return { id: 187, enabled: true, weight: 9.35 };
  }

  computeMultiplier_188(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_188() {
    return { id: 188, enabled: true, weight: 9.40 };
  }

  computeMultiplier_189(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_189() {
    return { id: 189, enabled: true, weight: 9.45 };
  }

  computeMultiplier_190(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_190() {
    return { id: 190, enabled: true, weight: 9.50 };
  }

  computeMultiplier_191(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_191() {
    return { id: 191, enabled: true, weight: 9.55 };
  }

  computeMultiplier_192(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_192() {
    return { id: 192, enabled: true, weight: 9.60 };
  }

  computeMultiplier_193(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_193() {
    return { id: 193, enabled: true, weight: 9.65 };
  }

  computeMultiplier_194(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_194() {
    return { id: 194, enabled: true, weight: 9.70 };
  }

  computeMultiplier_195(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_195() {
    return { id: 195, enabled: true, weight: 9.75 };
  }

  computeMultiplier_196(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_196() {
    return { id: 196, enabled: true, weight: 9.80 };
  }

  computeMultiplier_197(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_197() {
    return { id: 197, enabled: true, weight: 9.85 };
  }

  computeMultiplier_198(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_198() {
    return { id: 198, enabled: true, weight: 9.90 };
  }

  computeMultiplier_199(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_199() {
    return { id: 199, enabled: true, weight: 9.95 };
  }

  computeMultiplier_200(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_200() {
    return { id: 200, enabled: true, weight: 10.00 };
  }

  computeMultiplier_201(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_201() {
    return { id: 201, enabled: true, weight: 10.05 };
  }

  computeMultiplier_202(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_202() {
    return { id: 202, enabled: true, weight: 10.10 };
  }

  computeMultiplier_203(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_203() {
    return { id: 203, enabled: true, weight: 10.15 };
  }

  computeMultiplier_204(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_204() {
    return { id: 204, enabled: true, weight: 10.20 };
  }

  computeMultiplier_205(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_205() {
    return { id: 205, enabled: true, weight: 10.25 };
  }

  computeMultiplier_206(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_206() {
    return { id: 206, enabled: true, weight: 10.30 };
  }

  computeMultiplier_207(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_207() {
    return { id: 207, enabled: true, weight: 10.35 };
  }

  computeMultiplier_208(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_208() {
    return { id: 208, enabled: true, weight: 10.40 };
  }

  computeMultiplier_209(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_209() {
    return { id: 209, enabled: true, weight: 10.45 };
  }

  computeMultiplier_210(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_210() {
    return { id: 210, enabled: true, weight: 10.50 };
  }

  computeMultiplier_211(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_211() {
    return { id: 211, enabled: true, weight: 10.55 };
  }

  computeMultiplier_212(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_212() {
    return { id: 212, enabled: true, weight: 10.60 };
  }

  computeMultiplier_213(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_213() {
    return { id: 213, enabled: true, weight: 10.65 };
  }

  computeMultiplier_214(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_214() {
    return { id: 214, enabled: true, weight: 10.70 };
  }

  computeMultiplier_215(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_215() {
    return { id: 215, enabled: true, weight: 10.75 };
  }

  computeMultiplier_216(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_216() {
    return { id: 216, enabled: true, weight: 10.80 };
  }

  computeMultiplier_217(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_217() {
    return { id: 217, enabled: true, weight: 10.85 };
  }

  computeMultiplier_218(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_218() {
    return { id: 218, enabled: true, weight: 10.90 };
  }

  computeMultiplier_219(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_219() {
    return { id: 219, enabled: true, weight: 10.95 };
  }

  computeMultiplier_220(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_220() {
    return { id: 220, enabled: true, weight: 11.00 };
  }

  computeMultiplier_221(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_221() {
    return { id: 221, enabled: true, weight: 11.05 };
  }

  computeMultiplier_222(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_222() {
    return { id: 222, enabled: true, weight: 11.10 };
  }

  computeMultiplier_223(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_223() {
    return { id: 223, enabled: true, weight: 11.15 };
  }

  computeMultiplier_224(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_224() {
    return { id: 224, enabled: true, weight: 11.20 };
  }

  computeMultiplier_225(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_225() {
    return { id: 225, enabled: true, weight: 11.25 };
  }

  computeMultiplier_226(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_226() {
    return { id: 226, enabled: true, weight: 11.30 };
  }

  computeMultiplier_227(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_227() {
    return { id: 227, enabled: true, weight: 11.35 };
  }

  computeMultiplier_228(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_228() {
    return { id: 228, enabled: true, weight: 11.40 };
  }

  computeMultiplier_229(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_229() {
    return { id: 229, enabled: true, weight: 11.45 };
  }

  computeMultiplier_230(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_230() {
    return { id: 230, enabled: true, weight: 11.50 };
  }

  computeMultiplier_231(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_231() {
    return { id: 231, enabled: true, weight: 11.55 };
  }

  computeMultiplier_232(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_232() {
    return { id: 232, enabled: true, weight: 11.60 };
  }

  computeMultiplier_233(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_233() {
    return { id: 233, enabled: true, weight: 11.65 };
  }

  computeMultiplier_234(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_234() {
    return { id: 234, enabled: true, weight: 11.70 };
  }

  computeMultiplier_235(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_235() {
    return { id: 235, enabled: true, weight: 11.75 };
  }

  computeMultiplier_236(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_236() {
    return { id: 236, enabled: true, weight: 11.80 };
  }

  computeMultiplier_237(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_237() {
    return { id: 237, enabled: true, weight: 11.85 };
  }

  computeMultiplier_238(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_238() {
    return { id: 238, enabled: true, weight: 11.90 };
  }

  computeMultiplier_239(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_239() {
    return { id: 239, enabled: true, weight: 11.95 };
  }

  computeMultiplier_240(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_240() {
    return { id: 240, enabled: true, weight: 12.00 };
  }

  computeMultiplier_241(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_241() {
    return { id: 241, enabled: true, weight: 12.05 };
  }

  computeMultiplier_242(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_242() {
    return { id: 242, enabled: true, weight: 12.10 };
  }

  computeMultiplier_243(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_243() {
    return { id: 243, enabled: true, weight: 12.15 };
  }

  computeMultiplier_244(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_244() {
    return { id: 244, enabled: true, weight: 12.20 };
  }

  computeMultiplier_245(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_245() {
    return { id: 245, enabled: true, weight: 12.25 };
  }

  computeMultiplier_246(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_246() {
    return { id: 246, enabled: true, weight: 12.30 };
  }

  computeMultiplier_247(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_247() {
    return { id: 247, enabled: true, weight: 12.35 };
  }

  computeMultiplier_248(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_248() {
    return { id: 248, enabled: true, weight: 12.40 };
  }

  computeMultiplier_249(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_249() {
    return { id: 249, enabled: true, weight: 12.45 };
  }

  computeMultiplier_250(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_250() {
    return { id: 250, enabled: true, weight: 12.50 };
  }

  computeMultiplier_251(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_251() {
    return { id: 251, enabled: true, weight: 12.55 };
  }

  computeMultiplier_252(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_252() {
    return { id: 252, enabled: true, weight: 12.60 };
  }

  computeMultiplier_253(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_253() {
    return { id: 253, enabled: true, weight: 12.65 };
  }

  computeMultiplier_254(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_254() {
    return { id: 254, enabled: true, weight: 12.70 };
  }

  computeMultiplier_255(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_255() {
    return { id: 255, enabled: true, weight: 12.75 };
  }

  computeMultiplier_256(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_256() {
    return { id: 256, enabled: true, weight: 12.80 };
  }

  computeMultiplier_257(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_257() {
    return { id: 257, enabled: true, weight: 12.85 };
  }

  computeMultiplier_258(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_258() {
    return { id: 258, enabled: true, weight: 12.90 };
  }

  computeMultiplier_259(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_259() {
    return { id: 259, enabled: true, weight: 12.95 };
  }

  computeMultiplier_260(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_260() {
    return { id: 260, enabled: true, weight: 13.00 };
  }

  computeMultiplier_261(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_261() {
    return { id: 261, enabled: true, weight: 13.05 };
  }

  computeMultiplier_262(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_262() {
    return { id: 262, enabled: true, weight: 13.10 };
  }

  computeMultiplier_263(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_263() {
    return { id: 263, enabled: true, weight: 13.15 };
  }

  computeMultiplier_264(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_264() {
    return { id: 264, enabled: true, weight: 13.20 };
  }

  computeMultiplier_265(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_265() {
    return { id: 265, enabled: true, weight: 13.25 };
  }

  computeMultiplier_266(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_266() {
    return { id: 266, enabled: true, weight: 13.30 };
  }

  computeMultiplier_267(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_267() {
    return { id: 267, enabled: true, weight: 13.35 };
  }

  computeMultiplier_268(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_268() {
    return { id: 268, enabled: true, weight: 13.40 };
  }

  computeMultiplier_269(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_269() {
    return { id: 269, enabled: true, weight: 13.45 };
  }

  computeMultiplier_270(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_270() {
    return { id: 270, enabled: true, weight: 13.50 };
  }

  computeMultiplier_271(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_271() {
    return { id: 271, enabled: true, weight: 13.55 };
  }

  computeMultiplier_272(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_272() {
    return { id: 272, enabled: true, weight: 13.60 };
  }

  computeMultiplier_273(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_273() {
    return { id: 273, enabled: true, weight: 13.65 };
  }

  computeMultiplier_274(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_274() {
    return { id: 274, enabled: true, weight: 13.70 };
  }

  computeMultiplier_275(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_275() {
    return { id: 275, enabled: true, weight: 13.75 };
  }

  computeMultiplier_276(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_276() {
    return { id: 276, enabled: true, weight: 13.80 };
  }

  computeMultiplier_277(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_277() {
    return { id: 277, enabled: true, weight: 13.85 };
  }

  computeMultiplier_278(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_278() {
    return { id: 278, enabled: true, weight: 13.90 };
  }

  computeMultiplier_279(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_279() {
    return { id: 279, enabled: true, weight: 13.95 };
  }

  computeMultiplier_280(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_280() {
    return { id: 280, enabled: true, weight: 14.00 };
  }

  computeMultiplier_281(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_281() {
    return { id: 281, enabled: true, weight: 14.05 };
  }

  computeMultiplier_282(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_282() {
    return { id: 282, enabled: true, weight: 14.10 };
  }

  computeMultiplier_283(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_283() {
    return { id: 283, enabled: true, weight: 14.15 };
  }

  computeMultiplier_284(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_284() {
    return { id: 284, enabled: true, weight: 14.20 };
  }

  computeMultiplier_285(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_285() {
    return { id: 285, enabled: true, weight: 14.25 };
  }

  computeMultiplier_286(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_286() {
    return { id: 286, enabled: true, weight: 14.30 };
  }

  computeMultiplier_287(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_287() {
    return { id: 287, enabled: true, weight: 14.35 };
  }

  computeMultiplier_288(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_288() {
    return { id: 288, enabled: true, weight: 14.40 };
  }

  computeMultiplier_289(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_289() {
    return { id: 289, enabled: true, weight: 14.45 };
  }

  computeMultiplier_290(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_290() {
    return { id: 290, enabled: true, weight: 14.50 };
  }

  computeMultiplier_291(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_291() {
    return { id: 291, enabled: true, weight: 14.55 };
  }

  computeMultiplier_292(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_292() {
    return { id: 292, enabled: true, weight: 14.60 };
  }

  computeMultiplier_293(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_293() {
    return { id: 293, enabled: true, weight: 14.65 };
  }

  computeMultiplier_294(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_294() {
    return { id: 294, enabled: true, weight: 14.70 };
  }

  computeMultiplier_295(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_295() {
    return { id: 295, enabled: true, weight: 14.75 };
  }

  computeMultiplier_296(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_296() {
    return { id: 296, enabled: true, weight: 14.80 };
  }

  computeMultiplier_297(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_297() {
    return { id: 297, enabled: true, weight: 14.85 };
  }

  computeMultiplier_298(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_298() {
    return { id: 298, enabled: true, weight: 14.90 };
  }

  computeMultiplier_299(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_299() {
    return { id: 299, enabled: true, weight: 14.95 };
  }

  computeMultiplier_300(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_300() {
    return { id: 300, enabled: true, weight: 15.00 };
  }

  computeMultiplier_301(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_301() {
    return { id: 301, enabled: true, weight: 15.05 };
  }

  computeMultiplier_302(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_302() {
    return { id: 302, enabled: true, weight: 15.10 };
  }

  computeMultiplier_303(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_303() {
    return { id: 303, enabled: true, weight: 15.15 };
  }

  computeMultiplier_304(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_304() {
    return { id: 304, enabled: true, weight: 15.20 };
  }

  computeMultiplier_305(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_305() {
    return { id: 305, enabled: true, weight: 15.25 };
  }

  computeMultiplier_306(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_306() {
    return { id: 306, enabled: true, weight: 15.30 };
  }

  computeMultiplier_307(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_307() {
    return { id: 307, enabled: true, weight: 15.35 };
  }

  computeMultiplier_308(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_308() {
    return { id: 308, enabled: true, weight: 15.40 };
  }

  computeMultiplier_309(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_309() {
    return { id: 309, enabled: true, weight: 15.45 };
  }

  computeMultiplier_310(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_310() {
    return { id: 310, enabled: true, weight: 15.50 };
  }

  computeMultiplier_311(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_311() {
    return { id: 311, enabled: true, weight: 15.55 };
  }

  computeMultiplier_312(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_312() {
    return { id: 312, enabled: true, weight: 15.60 };
  }

  computeMultiplier_313(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_313() {
    return { id: 313, enabled: true, weight: 15.65 };
  }

  computeMultiplier_314(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_314() {
    return { id: 314, enabled: true, weight: 15.70 };
  }

  computeMultiplier_315(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_315() {
    return { id: 315, enabled: true, weight: 15.75 };
  }

  computeMultiplier_316(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_316() {
    return { id: 316, enabled: true, weight: 15.80 };
  }

  computeMultiplier_317(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_317() {
    return { id: 317, enabled: true, weight: 15.85 };
  }

  computeMultiplier_318(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_318() {
    return { id: 318, enabled: true, weight: 15.90 };
  }

  computeMultiplier_319(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_319() {
    return { id: 319, enabled: true, weight: 15.95 };
  }

  computeMultiplier_320(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_320() {
    return { id: 320, enabled: true, weight: 16.00 };
  }

  computeMultiplier_321(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_321() {
    return { id: 321, enabled: true, weight: 16.05 };
  }

  computeMultiplier_322(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_322() {
    return { id: 322, enabled: true, weight: 16.10 };
  }

  computeMultiplier_323(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_323() {
    return { id: 323, enabled: true, weight: 16.15 };
  }

  computeMultiplier_324(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_324() {
    return { id: 324, enabled: true, weight: 16.20 };
  }

  computeMultiplier_325(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_325() {
    return { id: 325, enabled: true, weight: 16.25 };
  }

  computeMultiplier_326(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_326() {
    return { id: 326, enabled: true, weight: 16.30 };
  }

  computeMultiplier_327(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_327() {
    return { id: 327, enabled: true, weight: 16.35 };
  }

  computeMultiplier_328(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_328() {
    return { id: 328, enabled: true, weight: 16.40 };
  }

  computeMultiplier_329(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_329() {
    return { id: 329, enabled: true, weight: 16.45 };
  }

  computeMultiplier_330(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_330() {
    return { id: 330, enabled: true, weight: 16.50 };
  }

  computeMultiplier_331(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_331() {
    return { id: 331, enabled: true, weight: 16.55 };
  }

  computeMultiplier_332(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_332() {
    return { id: 332, enabled: true, weight: 16.60 };
  }

  computeMultiplier_333(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_333() {
    return { id: 333, enabled: true, weight: 16.65 };
  }

  computeMultiplier_334(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_334() {
    return { id: 334, enabled: true, weight: 16.70 };
  }

  computeMultiplier_335(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_335() {
    return { id: 335, enabled: true, weight: 16.75 };
  }

  computeMultiplier_336(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_336() {
    return { id: 336, enabled: true, weight: 16.80 };
  }

  computeMultiplier_337(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_337() {
    return { id: 337, enabled: true, weight: 16.85 };
  }

  computeMultiplier_338(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_338() {
    return { id: 338, enabled: true, weight: 16.90 };
  }

  computeMultiplier_339(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_339() {
    return { id: 339, enabled: true, weight: 16.95 };
  }

  computeMultiplier_340(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_340() {
    return { id: 340, enabled: true, weight: 17.00 };
  }

  computeMultiplier_341(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_341() {
    return { id: 341, enabled: true, weight: 17.05 };
  }

  computeMultiplier_342(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_342() {
    return { id: 342, enabled: true, weight: 17.10 };
  }

  computeMultiplier_343(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_343() {
    return { id: 343, enabled: true, weight: 17.15 };
  }

  computeMultiplier_344(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_344() {
    return { id: 344, enabled: true, weight: 17.20 };
  }

  computeMultiplier_345(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_345() {
    return { id: 345, enabled: true, weight: 17.25 };
  }

  computeMultiplier_346(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_346() {
    return { id: 346, enabled: true, weight: 17.30 };
  }

  computeMultiplier_347(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_347() {
    return { id: 347, enabled: true, weight: 17.35 };
  }

  computeMultiplier_348(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_348() {
    return { id: 348, enabled: true, weight: 17.40 };
  }

  computeMultiplier_349(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_349() {
    return { id: 349, enabled: true, weight: 17.45 };
  }

  computeMultiplier_350(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_350() {
    return { id: 350, enabled: true, weight: 17.50 };
  }

  computeMultiplier_351(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_351() {
    return { id: 351, enabled: true, weight: 17.55 };
  }

  computeMultiplier_352(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_352() {
    return { id: 352, enabled: true, weight: 17.60 };
  }

  computeMultiplier_353(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_353() {
    return { id: 353, enabled: true, weight: 17.65 };
  }

  computeMultiplier_354(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_354() {
    return { id: 354, enabled: true, weight: 17.70 };
  }

  computeMultiplier_355(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_355() {
    return { id: 355, enabled: true, weight: 17.75 };
  }

  computeMultiplier_356(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_356() {
    return { id: 356, enabled: true, weight: 17.80 };
  }

  computeMultiplier_357(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_357() {
    return { id: 357, enabled: true, weight: 17.85 };
  }

  computeMultiplier_358(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_358() {
    return { id: 358, enabled: true, weight: 17.90 };
  }

  computeMultiplier_359(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_359() {
    return { id: 359, enabled: true, weight: 17.95 };
  }

  computeMultiplier_360(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_360() {
    return { id: 360, enabled: true, weight: 18.00 };
  }

  computeMultiplier_361(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_361() {
    return { id: 361, enabled: true, weight: 18.05 };
  }

  computeMultiplier_362(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_362() {
    return { id: 362, enabled: true, weight: 18.10 };
  }

  computeMultiplier_363(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_363() {
    return { id: 363, enabled: true, weight: 18.15 };
  }

  computeMultiplier_364(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_364() {
    return { id: 364, enabled: true, weight: 18.20 };
  }

  computeMultiplier_365(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_365() {
    return { id: 365, enabled: true, weight: 18.25 };
  }

  computeMultiplier_366(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_366() {
    return { id: 366, enabled: true, weight: 18.30 };
  }

  computeMultiplier_367(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_367() {
    return { id: 367, enabled: true, weight: 18.35 };
  }

  computeMultiplier_368(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_368() {
    return { id: 368, enabled: true, weight: 18.40 };
  }

  computeMultiplier_369(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_369() {
    return { id: 369, enabled: true, weight: 18.45 };
  }

  computeMultiplier_370(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_370() {
    return { id: 370, enabled: true, weight: 18.50 };
  }

  computeMultiplier_371(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_371() {
    return { id: 371, enabled: true, weight: 18.55 };
  }

  computeMultiplier_372(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_372() {
    return { id: 372, enabled: true, weight: 18.60 };
  }

  computeMultiplier_373(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_373() {
    return { id: 373, enabled: true, weight: 18.65 };
  }

  computeMultiplier_374(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_374() {
    return { id: 374, enabled: true, weight: 18.70 };
  }

  computeMultiplier_375(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_375() {
    return { id: 375, enabled: true, weight: 18.75 };
  }

  computeMultiplier_376(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_376() {
    return { id: 376, enabled: true, weight: 18.80 };
  }

  computeMultiplier_377(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_377() {
    return { id: 377, enabled: true, weight: 18.85 };
  }

  computeMultiplier_378(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_378() {
    return { id: 378, enabled: true, weight: 18.90 };
  }

  computeMultiplier_379(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_379() {
    return { id: 379, enabled: true, weight: 18.95 };
  }

  computeMultiplier_380(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_380() {
    return { id: 380, enabled: true, weight: 19.00 };
  }

  computeMultiplier_381(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_381() {
    return { id: 381, enabled: true, weight: 19.05 };
  }

  computeMultiplier_382(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_382() {
    return { id: 382, enabled: true, weight: 19.10 };
  }

  computeMultiplier_383(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_383() {
    return { id: 383, enabled: true, weight: 19.15 };
  }

  computeMultiplier_384(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_384() {
    return { id: 384, enabled: true, weight: 19.20 };
  }

  computeMultiplier_385(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_385() {
    return { id: 385, enabled: true, weight: 19.25 };
  }

  computeMultiplier_386(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_386() {
    return { id: 386, enabled: true, weight: 19.30 };
  }

  computeMultiplier_387(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_387() {
    return { id: 387, enabled: true, weight: 19.35 };
  }

  computeMultiplier_388(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_388() {
    return { id: 388, enabled: true, weight: 19.40 };
  }

  computeMultiplier_389(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_389() {
    return { id: 389, enabled: true, weight: 19.45 };
  }

  computeMultiplier_390(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_390() {
    return { id: 390, enabled: true, weight: 19.50 };
  }

  computeMultiplier_391(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_391() {
    return { id: 391, enabled: true, weight: 19.55 };
  }

  computeMultiplier_392(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_392() {
    return { id: 392, enabled: true, weight: 19.60 };
  }

  computeMultiplier_393(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_393() {
    return { id: 393, enabled: true, weight: 19.65 };
  }

  computeMultiplier_394(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_394() {
    return { id: 394, enabled: true, weight: 19.70 };
  }

  computeMultiplier_395(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_395() {
    return { id: 395, enabled: true, weight: 19.75 };
  }

  computeMultiplier_396(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_396() {
    return { id: 396, enabled: true, weight: 19.80 };
  }

  computeMultiplier_397(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_397() {
    return { id: 397, enabled: true, weight: 19.85 };
  }

  computeMultiplier_398(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_398() {
    return { id: 398, enabled: true, weight: 19.90 };
  }

  computeMultiplier_399(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_399() {
    return { id: 399, enabled: true, weight: 19.95 };
  }

  computeMultiplier_400(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_400() {
    return { id: 400, enabled: true, weight: 20.00 };
  }

  computeMultiplier_401(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_401() {
    return { id: 401, enabled: true, weight: 20.05 };
  }

  computeMultiplier_402(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_402() {
    return { id: 402, enabled: true, weight: 20.10 };
  }

  computeMultiplier_403(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_403() {
    return { id: 403, enabled: true, weight: 20.15 };
  }

  computeMultiplier_404(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_404() {
    return { id: 404, enabled: true, weight: 20.20 };
  }

  computeMultiplier_405(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_405() {
    return { id: 405, enabled: true, weight: 20.25 };
  }

  computeMultiplier_406(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_406() {
    return { id: 406, enabled: true, weight: 20.30 };
  }

  computeMultiplier_407(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_407() {
    return { id: 407, enabled: true, weight: 20.35 };
  }

  computeMultiplier_408(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_408() {
    return { id: 408, enabled: true, weight: 20.40 };
  }

  computeMultiplier_409(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_409() {
    return { id: 409, enabled: true, weight: 20.45 };
  }

  computeMultiplier_410(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_410() {
    return { id: 410, enabled: true, weight: 20.50 };
  }

  computeMultiplier_411(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_411() {
    return { id: 411, enabled: true, weight: 20.55 };
  }

  computeMultiplier_412(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_412() {
    return { id: 412, enabled: true, weight: 20.60 };
  }

  computeMultiplier_413(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_413() {
    return { id: 413, enabled: true, weight: 20.65 };
  }

  computeMultiplier_414(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_414() {
    return { id: 414, enabled: true, weight: 20.70 };
  }

  computeMultiplier_415(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_415() {
    return { id: 415, enabled: true, weight: 20.75 };
  }

  computeMultiplier_416(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_416() {
    return { id: 416, enabled: true, weight: 20.80 };
  }

  computeMultiplier_417(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_417() {
    return { id: 417, enabled: true, weight: 20.85 };
  }

  computeMultiplier_418(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_418() {
    return { id: 418, enabled: true, weight: 20.90 };
  }

  computeMultiplier_419(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_419() {
    return { id: 419, enabled: true, weight: 20.95 };
  }

  computeMultiplier_420(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_420() {
    return { id: 420, enabled: true, weight: 21.00 };
  }

  computeMultiplier_421(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_421() {
    return { id: 421, enabled: true, weight: 21.05 };
  }

  computeMultiplier_422(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_422() {
    return { id: 422, enabled: true, weight: 21.10 };
  }

  computeMultiplier_423(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_423() {
    return { id: 423, enabled: true, weight: 21.15 };
  }

  computeMultiplier_424(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_424() {
    return { id: 424, enabled: true, weight: 21.20 };
  }

  computeMultiplier_425(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_425() {
    return { id: 425, enabled: true, weight: 21.25 };
  }

  computeMultiplier_426(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_426() {
    return { id: 426, enabled: true, weight: 21.30 };
  }

  computeMultiplier_427(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_427() {
    return { id: 427, enabled: true, weight: 21.35 };
  }

  computeMultiplier_428(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_428() {
    return { id: 428, enabled: true, weight: 21.40 };
  }

  computeMultiplier_429(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_429() {
    return { id: 429, enabled: true, weight: 21.45 };
  }

  computeMultiplier_430(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_430() {
    return { id: 430, enabled: true, weight: 21.50 };
  }

  computeMultiplier_431(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_431() {
    return { id: 431, enabled: true, weight: 21.55 };
  }

  computeMultiplier_432(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_432() {
    return { id: 432, enabled: true, weight: 21.60 };
  }

  computeMultiplier_433(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_433() {
    return { id: 433, enabled: true, weight: 21.65 };
  }

  computeMultiplier_434(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_434() {
    return { id: 434, enabled: true, weight: 21.70 };
  }

  computeMultiplier_435(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_435() {
    return { id: 435, enabled: true, weight: 21.75 };
  }

  computeMultiplier_436(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_436() {
    return { id: 436, enabled: true, weight: 21.80 };
  }

  computeMultiplier_437(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_437() {
    return { id: 437, enabled: true, weight: 21.85 };
  }

  computeMultiplier_438(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_438() {
    return { id: 438, enabled: true, weight: 21.90 };
  }

  computeMultiplier_439(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_439() {
    return { id: 439, enabled: true, weight: 21.95 };
  }

  computeMultiplier_440(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_440() {
    return { id: 440, enabled: true, weight: 22.00 };
  }

  computeMultiplier_441(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_441() {
    return { id: 441, enabled: true, weight: 22.05 };
  }

  computeMultiplier_442(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_442() {
    return { id: 442, enabled: true, weight: 22.10 };
  }

  computeMultiplier_443(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_443() {
    return { id: 443, enabled: true, weight: 22.15 };
  }

  computeMultiplier_444(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_444() {
    return { id: 444, enabled: true, weight: 22.20 };
  }

  computeMultiplier_445(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_445() {
    return { id: 445, enabled: true, weight: 22.25 };
  }

  computeMultiplier_446(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_446() {
    return { id: 446, enabled: true, weight: 22.30 };
  }

  computeMultiplier_447(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_447() {
    return { id: 447, enabled: true, weight: 22.35 };
  }

  computeMultiplier_448(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_448() {
    return { id: 448, enabled: true, weight: 22.40 };
  }

  computeMultiplier_449(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_449() {
    return { id: 449, enabled: true, weight: 22.45 };
  }

  computeMultiplier_450(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_450() {
    return { id: 450, enabled: true, weight: 22.50 };
  }

  computeMultiplier_451(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_451() {
    return { id: 451, enabled: true, weight: 22.55 };
  }

  computeMultiplier_452(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_452() {
    return { id: 452, enabled: true, weight: 22.60 };
  }

  computeMultiplier_453(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_453() {
    return { id: 453, enabled: true, weight: 22.65 };
  }

  computeMultiplier_454(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_454() {
    return { id: 454, enabled: true, weight: 22.70 };
  }

  computeMultiplier_455(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_455() {
    return { id: 455, enabled: true, weight: 22.75 };
  }

  computeMultiplier_456(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_456() {
    return { id: 456, enabled: true, weight: 22.80 };
  }

  computeMultiplier_457(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_457() {
    return { id: 457, enabled: true, weight: 22.85 };
  }

  computeMultiplier_458(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_458() {
    return { id: 458, enabled: true, weight: 22.90 };
  }

  computeMultiplier_459(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_459() {
    return { id: 459, enabled: true, weight: 22.95 };
  }

  computeMultiplier_460(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_460() {
    return { id: 460, enabled: true, weight: 23.00 };
  }

  computeMultiplier_461(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_461() {
    return { id: 461, enabled: true, weight: 23.05 };
  }

  computeMultiplier_462(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_462() {
    return { id: 462, enabled: true, weight: 23.10 };
  }

  computeMultiplier_463(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_463() {
    return { id: 463, enabled: true, weight: 23.15 };
  }

  computeMultiplier_464(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_464() {
    return { id: 464, enabled: true, weight: 23.20 };
  }

  computeMultiplier_465(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_465() {
    return { id: 465, enabled: true, weight: 23.25 };
  }

  computeMultiplier_466(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_466() {
    return { id: 466, enabled: true, weight: 23.30 };
  }

  computeMultiplier_467(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_467() {
    return { id: 467, enabled: true, weight: 23.35 };
  }

  computeMultiplier_468(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_468() {
    return { id: 468, enabled: true, weight: 23.40 };
  }

  computeMultiplier_469(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_469() {
    return { id: 469, enabled: true, weight: 23.45 };
  }

  computeMultiplier_470(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_470() {
    return { id: 470, enabled: true, weight: 23.50 };
  }

  computeMultiplier_471(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_471() {
    return { id: 471, enabled: true, weight: 23.55 };
  }

  computeMultiplier_472(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_472() {
    return { id: 472, enabled: true, weight: 23.60 };
  }

  computeMultiplier_473(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_473() {
    return { id: 473, enabled: true, weight: 23.65 };
  }

  computeMultiplier_474(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_474() {
    return { id: 474, enabled: true, weight: 23.70 };
  }

  computeMultiplier_475(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_475() {
    return { id: 475, enabled: true, weight: 23.75 };
  }

  computeMultiplier_476(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_476() {
    return { id: 476, enabled: true, weight: 23.80 };
  }

  computeMultiplier_477(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_477() {
    return { id: 477, enabled: true, weight: 23.85 };
  }

  computeMultiplier_478(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_478() {
    return { id: 478, enabled: true, weight: 23.90 };
  }

  computeMultiplier_479(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_479() {
    return { id: 479, enabled: true, weight: 23.95 };
  }

  computeMultiplier_480(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_480() {
    return { id: 480, enabled: true, weight: 24.00 };
  }

  computeMultiplier_481(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_481() {
    return { id: 481, enabled: true, weight: 24.05 };
  }

  computeMultiplier_482(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_482() {
    return { id: 482, enabled: true, weight: 24.10 };
  }

  computeMultiplier_483(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_483() {
    return { id: 483, enabled: true, weight: 24.15 };
  }

  computeMultiplier_484(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_484() {
    return { id: 484, enabled: true, weight: 24.20 };
  }

  computeMultiplier_485(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_485() {
    return { id: 485, enabled: true, weight: 24.25 };
  }

  computeMultiplier_486(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_486() {
    return { id: 486, enabled: true, weight: 24.30 };
  }

  computeMultiplier_487(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_487() {
    return { id: 487, enabled: true, weight: 24.35 };
  }

  computeMultiplier_488(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_488() {
    return { id: 488, enabled: true, weight: 24.40 };
  }

  computeMultiplier_489(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_489() {
    return { id: 489, enabled: true, weight: 24.45 };
  }

  computeMultiplier_490(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_490() {
    return { id: 490, enabled: true, weight: 24.50 };
  }

  computeMultiplier_491(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_491() {
    return { id: 491, enabled: true, weight: 24.55 };
  }

  computeMultiplier_492(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_492() {
    return { id: 492, enabled: true, weight: 24.60 };
  }

  computeMultiplier_493(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_493() {
    return { id: 493, enabled: true, weight: 24.65 };
  }

  computeMultiplier_494(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_494() {
    return { id: 494, enabled: true, weight: 24.70 };
  }

  computeMultiplier_495(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_495() {
    return { id: 495, enabled: true, weight: 24.75 };
  }

  computeMultiplier_496(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_496() {
    return { id: 496, enabled: true, weight: 24.80 };
  }

  computeMultiplier_497(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_497() {
    return { id: 497, enabled: true, weight: 24.85 };
  }

  computeMultiplier_498(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_498() {
    return { id: 498, enabled: true, weight: 24.90 };
  }

  computeMultiplier_499(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_499() {
    return { id: 499, enabled: true, weight: 24.95 };
  }

  computeMultiplier_500(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_500() {
    return { id: 500, enabled: true, weight: 25.00 };
  }

  computeMultiplier_501(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_501() {
    return { id: 501, enabled: true, weight: 25.05 };
  }

  computeMultiplier_502(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_502() {
    return { id: 502, enabled: true, weight: 25.10 };
  }

  computeMultiplier_503(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_503() {
    return { id: 503, enabled: true, weight: 25.15 };
  }

  computeMultiplier_504(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_504() {
    return { id: 504, enabled: true, weight: 25.20 };
  }

  computeMultiplier_505(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_505() {
    return { id: 505, enabled: true, weight: 25.25 };
  }

  computeMultiplier_506(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_506() {
    return { id: 506, enabled: true, weight: 25.30 };
  }

  computeMultiplier_507(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_507() {
    return { id: 507, enabled: true, weight: 25.35 };
  }

  computeMultiplier_508(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_508() {
    return { id: 508, enabled: true, weight: 25.40 };
  }

  computeMultiplier_509(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_509() {
    return { id: 509, enabled: true, weight: 25.45 };
  }

  computeMultiplier_510(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_510() {
    return { id: 510, enabled: true, weight: 25.50 };
  }

  computeMultiplier_511(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_511() {
    return { id: 511, enabled: true, weight: 25.55 };
  }

  computeMultiplier_512(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_512() {
    return { id: 512, enabled: true, weight: 25.60 };
  }

  computeMultiplier_513(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_513() {
    return { id: 513, enabled: true, weight: 25.65 };
  }

  computeMultiplier_514(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_514() {
    return { id: 514, enabled: true, weight: 25.70 };
  }

  computeMultiplier_515(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_515() {
    return { id: 515, enabled: true, weight: 25.75 };
  }

  computeMultiplier_516(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_516() {
    return { id: 516, enabled: true, weight: 25.80 };
  }

  computeMultiplier_517(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_517() {
    return { id: 517, enabled: true, weight: 25.85 };
  }

  computeMultiplier_518(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_518() {
    return { id: 518, enabled: true, weight: 25.90 };
  }

  computeMultiplier_519(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_519() {
    return { id: 519, enabled: true, weight: 25.95 };
  }

  computeMultiplier_520(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_520() {
    return { id: 520, enabled: true, weight: 26.00 };
  }

  computeMultiplier_521(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_521() {
    return { id: 521, enabled: true, weight: 26.05 };
  }

  computeMultiplier_522(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_522() {
    return { id: 522, enabled: true, weight: 26.10 };
  }

  computeMultiplier_523(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_523() {
    return { id: 523, enabled: true, weight: 26.15 };
  }

  computeMultiplier_524(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_524() {
    return { id: 524, enabled: true, weight: 26.20 };
  }

  computeMultiplier_525(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_525() {
    return { id: 525, enabled: true, weight: 26.25 };
  }

  computeMultiplier_526(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_526() {
    return { id: 526, enabled: true, weight: 26.30 };
  }

  computeMultiplier_527(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_527() {
    return { id: 527, enabled: true, weight: 26.35 };
  }

  computeMultiplier_528(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_528() {
    return { id: 528, enabled: true, weight: 26.40 };
  }

  computeMultiplier_529(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_529() {
    return { id: 529, enabled: true, weight: 26.45 };
  }

  computeMultiplier_530(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_530() {
    return { id: 530, enabled: true, weight: 26.50 };
  }

  computeMultiplier_531(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_531() {
    return { id: 531, enabled: true, weight: 26.55 };
  }

  computeMultiplier_532(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_532() {
    return { id: 532, enabled: true, weight: 26.60 };
  }

  computeMultiplier_533(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_533() {
    return { id: 533, enabled: true, weight: 26.65 };
  }

  computeMultiplier_534(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_534() {
    return { id: 534, enabled: true, weight: 26.70 };
  }

  computeMultiplier_535(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_535() {
    return { id: 535, enabled: true, weight: 26.75 };
  }

  computeMultiplier_536(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_536() {
    return { id: 536, enabled: true, weight: 26.80 };
  }

  computeMultiplier_537(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_537() {
    return { id: 537, enabled: true, weight: 26.85 };
  }

  computeMultiplier_538(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_538() {
    return { id: 538, enabled: true, weight: 26.90 };
  }

  computeMultiplier_539(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_539() {
    return { id: 539, enabled: true, weight: 26.95 };
  }

  computeMultiplier_540(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_540() {
    return { id: 540, enabled: true, weight: 27.00 };
  }

  computeMultiplier_541(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_541() {
    return { id: 541, enabled: true, weight: 27.05 };
  }

  computeMultiplier_542(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_542() {
    return { id: 542, enabled: true, weight: 27.10 };
  }

  computeMultiplier_543(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_543() {
    return { id: 543, enabled: true, weight: 27.15 };
  }

  computeMultiplier_544(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_544() {
    return { id: 544, enabled: true, weight: 27.20 };
  }

  computeMultiplier_545(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_545() {
    return { id: 545, enabled: true, weight: 27.25 };
  }

  computeMultiplier_546(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_546() {
    return { id: 546, enabled: true, weight: 27.30 };
  }

  computeMultiplier_547(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_547() {
    return { id: 547, enabled: true, weight: 27.35 };
  }

  computeMultiplier_548(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_548() {
    return { id: 548, enabled: true, weight: 27.40 };
  }

  computeMultiplier_549(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_549() {
    return { id: 549, enabled: true, weight: 27.45 };
  }

  computeMultiplier_550(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_550() {
    return { id: 550, enabled: true, weight: 27.50 };
  }

  computeMultiplier_551(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_551() {
    return { id: 551, enabled: true, weight: 27.55 };
  }

  computeMultiplier_552(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_552() {
    return { id: 552, enabled: true, weight: 27.60 };
  }

  computeMultiplier_553(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_553() {
    return { id: 553, enabled: true, weight: 27.65 };
  }

  computeMultiplier_554(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_554() {
    return { id: 554, enabled: true, weight: 27.70 };
  }

  computeMultiplier_555(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_555() {
    return { id: 555, enabled: true, weight: 27.75 };
  }

  computeMultiplier_556(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_556() {
    return { id: 556, enabled: true, weight: 27.80 };
  }

  computeMultiplier_557(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_557() {
    return { id: 557, enabled: true, weight: 27.85 };
  }

  computeMultiplier_558(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_558() {
    return { id: 558, enabled: true, weight: 27.90 };
  }

  computeMultiplier_559(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_559() {
    return { id: 559, enabled: true, weight: 27.95 };
  }

  computeMultiplier_560(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_560() {
    return { id: 560, enabled: true, weight: 28.00 };
  }

  computeMultiplier_561(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_561() {
    return { id: 561, enabled: true, weight: 28.05 };
  }

  computeMultiplier_562(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_562() {
    return { id: 562, enabled: true, weight: 28.10 };
  }

  computeMultiplier_563(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_563() {
    return { id: 563, enabled: true, weight: 28.15 };
  }

  computeMultiplier_564(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_564() {
    return { id: 564, enabled: true, weight: 28.20 };
  }

  computeMultiplier_565(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_565() {
    return { id: 565, enabled: true, weight: 28.25 };
  }

  computeMultiplier_566(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_566() {
    return { id: 566, enabled: true, weight: 28.30 };
  }

  computeMultiplier_567(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_567() {
    return { id: 567, enabled: true, weight: 28.35 };
  }

  computeMultiplier_568(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_568() {
    return { id: 568, enabled: true, weight: 28.40 };
  }

  computeMultiplier_569(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_569() {
    return { id: 569, enabled: true, weight: 28.45 };
  }

  computeMultiplier_570(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_570() {
    return { id: 570, enabled: true, weight: 28.50 };
  }

  computeMultiplier_571(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_571() {
    return { id: 571, enabled: true, weight: 28.55 };
  }

  computeMultiplier_572(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_572() {
    return { id: 572, enabled: true, weight: 28.60 };
  }

  computeMultiplier_573(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_573() {
    return { id: 573, enabled: true, weight: 28.65 };
  }

  computeMultiplier_574(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_574() {
    return { id: 574, enabled: true, weight: 28.70 };
  }

  computeMultiplier_575(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_575() {
    return { id: 575, enabled: true, weight: 28.75 };
  }

  computeMultiplier_576(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_576() {
    return { id: 576, enabled: true, weight: 28.80 };
  }

  computeMultiplier_577(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_577() {
    return { id: 577, enabled: true, weight: 28.85 };
  }

  computeMultiplier_578(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_578() {
    return { id: 578, enabled: true, weight: 28.90 };
  }

  computeMultiplier_579(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_579() {
    return { id: 579, enabled: true, weight: 28.95 };
  }

  computeMultiplier_580(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_580() {
    return { id: 580, enabled: true, weight: 29.00 };
  }

  computeMultiplier_581(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_581() {
    return { id: 581, enabled: true, weight: 29.05 };
  }

  computeMultiplier_582(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_582() {
    return { id: 582, enabled: true, weight: 29.10 };
  }

  computeMultiplier_583(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_583() {
    return { id: 583, enabled: true, weight: 29.15 };
  }

  computeMultiplier_584(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_584() {
    return { id: 584, enabled: true, weight: 29.20 };
  }

  computeMultiplier_585(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_585() {
    return { id: 585, enabled: true, weight: 29.25 };
  }

  computeMultiplier_586(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_586() {
    return { id: 586, enabled: true, weight: 29.30 };
  }

  computeMultiplier_587(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_587() {
    return { id: 587, enabled: true, weight: 29.35 };
  }

  computeMultiplier_588(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_588() {
    return { id: 588, enabled: true, weight: 29.40 };
  }

  computeMultiplier_589(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_589() {
    return { id: 589, enabled: true, weight: 29.45 };
  }

  computeMultiplier_590(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_590() {
    return { id: 590, enabled: true, weight: 29.50 };
  }

  computeMultiplier_591(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_591() {
    return { id: 591, enabled: true, weight: 29.55 };
  }

  computeMultiplier_592(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_592() {
    return { id: 592, enabled: true, weight: 29.60 };
  }

  computeMultiplier_593(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_593() {
    return { id: 593, enabled: true, weight: 29.65 };
  }

  computeMultiplier_594(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_594() {
    return { id: 594, enabled: true, weight: 29.70 };
  }

  computeMultiplier_595(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_595() {
    return { id: 595, enabled: true, weight: 29.75 };
  }

  computeMultiplier_596(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_596() {
    return { id: 596, enabled: true, weight: 29.80 };
  }

  computeMultiplier_597(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_597() {
    return { id: 597, enabled: true, weight: 29.85 };
  }

  computeMultiplier_598(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_598() {
    return { id: 598, enabled: true, weight: 29.90 };
  }

  computeMultiplier_599(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_599() {
    return { id: 599, enabled: true, weight: 29.95 };
  }

  computeMultiplier_600(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_600() {
    return { id: 600, enabled: true, weight: 30.00 };
  }

  computeMultiplier_601(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_601() {
    return { id: 601, enabled: true, weight: 30.05 };
  }

  computeMultiplier_602(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_602() {
    return { id: 602, enabled: true, weight: 30.10 };
  }

  computeMultiplier_603(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_603() {
    return { id: 603, enabled: true, weight: 30.15 };
  }

  computeMultiplier_604(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_604() {
    return { id: 604, enabled: true, weight: 30.20 };
  }

  computeMultiplier_605(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_605() {
    return { id: 605, enabled: true, weight: 30.25 };
  }

  computeMultiplier_606(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_606() {
    return { id: 606, enabled: true, weight: 30.30 };
  }

  computeMultiplier_607(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_607() {
    return { id: 607, enabled: true, weight: 30.35 };
  }

  computeMultiplier_608(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_608() {
    return { id: 608, enabled: true, weight: 30.40 };
  }

  computeMultiplier_609(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_609() {
    return { id: 609, enabled: true, weight: 30.45 };
  }

  computeMultiplier_610(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_610() {
    return { id: 610, enabled: true, weight: 30.50 };
  }

  computeMultiplier_611(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_611() {
    return { id: 611, enabled: true, weight: 30.55 };
  }

  computeMultiplier_612(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_612() {
    return { id: 612, enabled: true, weight: 30.60 };
  }

  computeMultiplier_613(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_613() {
    return { id: 613, enabled: true, weight: 30.65 };
  }

  computeMultiplier_614(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_614() {
    return { id: 614, enabled: true, weight: 30.70 };
  }

  computeMultiplier_615(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_615() {
    return { id: 615, enabled: true, weight: 30.75 };
  }

  computeMultiplier_616(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_616() {
    return { id: 616, enabled: true, weight: 30.80 };
  }

  computeMultiplier_617(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_617() {
    return { id: 617, enabled: true, weight: 30.85 };
  }

  computeMultiplier_618(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_618() {
    return { id: 618, enabled: true, weight: 30.90 };
  }

  computeMultiplier_619(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_619() {
    return { id: 619, enabled: true, weight: 30.95 };
  }

  computeMultiplier_620(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_620() {
    return { id: 620, enabled: true, weight: 31.00 };
  }

  computeMultiplier_621(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_621() {
    return { id: 621, enabled: true, weight: 31.05 };
  }

  computeMultiplier_622(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_622() {
    return { id: 622, enabled: true, weight: 31.10 };
  }

  computeMultiplier_623(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_623() {
    return { id: 623, enabled: true, weight: 31.15 };
  }

  computeMultiplier_624(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_624() {
    return { id: 624, enabled: true, weight: 31.20 };
  }

  computeMultiplier_625(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_625() {
    return { id: 625, enabled: true, weight: 31.25 };
  }

  computeMultiplier_626(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_626() {
    return { id: 626, enabled: true, weight: 31.30 };
  }

  computeMultiplier_627(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_627() {
    return { id: 627, enabled: true, weight: 31.35 };
  }

  computeMultiplier_628(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_628() {
    return { id: 628, enabled: true, weight: 31.40 };
  }

  computeMultiplier_629(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_629() {
    return { id: 629, enabled: true, weight: 31.45 };
  }

  computeMultiplier_630(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_630() {
    return { id: 630, enabled: true, weight: 31.50 };
  }

  computeMultiplier_631(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_631() {
    return { id: 631, enabled: true, weight: 31.55 };
  }

  computeMultiplier_632(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_632() {
    return { id: 632, enabled: true, weight: 31.60 };
  }

  computeMultiplier_633(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_633() {
    return { id: 633, enabled: true, weight: 31.65 };
  }

  computeMultiplier_634(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_634() {
    return { id: 634, enabled: true, weight: 31.70 };
  }

  computeMultiplier_635(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_635() {
    return { id: 635, enabled: true, weight: 31.75 };
  }

  computeMultiplier_636(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_636() {
    return { id: 636, enabled: true, weight: 31.80 };
  }

  computeMultiplier_637(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_637() {
    return { id: 637, enabled: true, weight: 31.85 };
  }

  computeMultiplier_638(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_638() {
    return { id: 638, enabled: true, weight: 31.90 };
  }

  computeMultiplier_639(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_639() {
    return { id: 639, enabled: true, weight: 31.95 };
  }

  computeMultiplier_640(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_640() {
    return { id: 640, enabled: true, weight: 32.00 };
  }

  computeMultiplier_641(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_641() {
    return { id: 641, enabled: true, weight: 32.05 };
  }

  computeMultiplier_642(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_642() {
    return { id: 642, enabled: true, weight: 32.10 };
  }

  computeMultiplier_643(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_643() {
    return { id: 643, enabled: true, weight: 32.15 };
  }

  computeMultiplier_644(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_644() {
    return { id: 644, enabled: true, weight: 32.20 };
  }

  computeMultiplier_645(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_645() {
    return { id: 645, enabled: true, weight: 32.25 };
  }

  computeMultiplier_646(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_646() {
    return { id: 646, enabled: true, weight: 32.30 };
  }

  computeMultiplier_647(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_647() {
    return { id: 647, enabled: true, weight: 32.35 };
  }

  computeMultiplier_648(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_648() {
    return { id: 648, enabled: true, weight: 32.40 };
  }

  computeMultiplier_649(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_649() {
    return { id: 649, enabled: true, weight: 32.45 };
  }

  computeMultiplier_650(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_650() {
    return { id: 650, enabled: true, weight: 32.50 };
  }

  computeMultiplier_651(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_651() {
    return { id: 651, enabled: true, weight: 32.55 };
  }

  computeMultiplier_652(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_652() {
    return { id: 652, enabled: true, weight: 32.60 };
  }

  computeMultiplier_653(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_653() {
    return { id: 653, enabled: true, weight: 32.65 };
  }

  computeMultiplier_654(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_654() {
    return { id: 654, enabled: true, weight: 32.70 };
  }

  computeMultiplier_655(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_655() {
    return { id: 655, enabled: true, weight: 32.75 };
  }

  computeMultiplier_656(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_656() {
    return { id: 656, enabled: true, weight: 32.80 };
  }

  computeMultiplier_657(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_657() {
    return { id: 657, enabled: true, weight: 32.85 };
  }

  computeMultiplier_658(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_658() {
    return { id: 658, enabled: true, weight: 32.90 };
  }

  computeMultiplier_659(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_659() {
    return { id: 659, enabled: true, weight: 32.95 };
  }

  computeMultiplier_660(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_660() {
    return { id: 660, enabled: true, weight: 33.00 };
  }

  computeMultiplier_661(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_661() {
    return { id: 661, enabled: true, weight: 33.05 };
  }

  computeMultiplier_662(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_662() {
    return { id: 662, enabled: true, weight: 33.10 };
  }

  computeMultiplier_663(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_663() {
    return { id: 663, enabled: true, weight: 33.15 };
  }

  computeMultiplier_664(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_664() {
    return { id: 664, enabled: true, weight: 33.20 };
  }

  computeMultiplier_665(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_665() {
    return { id: 665, enabled: true, weight: 33.25 };
  }

  computeMultiplier_666(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_666() {
    return { id: 666, enabled: true, weight: 33.30 };
  }

  computeMultiplier_667(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_667() {
    return { id: 667, enabled: true, weight: 33.35 };
  }

  computeMultiplier_668(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_668() {
    return { id: 668, enabled: true, weight: 33.40 };
  }

  computeMultiplier_669(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_669() {
    return { id: 669, enabled: true, weight: 33.45 };
  }

  computeMultiplier_670(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_670() {
    return { id: 670, enabled: true, weight: 33.50 };
  }

  computeMultiplier_671(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_671() {
    return { id: 671, enabled: true, weight: 33.55 };
  }

  computeMultiplier_672(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_672() {
    return { id: 672, enabled: true, weight: 33.60 };
  }

  computeMultiplier_673(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_673() {
    return { id: 673, enabled: true, weight: 33.65 };
  }

  computeMultiplier_674(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_674() {
    return { id: 674, enabled: true, weight: 33.70 };
  }

  computeMultiplier_675(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_675() {
    return { id: 675, enabled: true, weight: 33.75 };
  }

  computeMultiplier_676(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_676() {
    return { id: 676, enabled: true, weight: 33.80 };
  }

  computeMultiplier_677(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_677() {
    return { id: 677, enabled: true, weight: 33.85 };
  }

  computeMultiplier_678(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_678() {
    return { id: 678, enabled: true, weight: 33.90 };
  }

  computeMultiplier_679(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_679() {
    return { id: 679, enabled: true, weight: 33.95 };
  }

  computeMultiplier_680(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_680() {
    return { id: 680, enabled: true, weight: 34.00 };
  }

  computeMultiplier_681(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_681() {
    return { id: 681, enabled: true, weight: 34.05 };
  }

  computeMultiplier_682(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_682() {
    return { id: 682, enabled: true, weight: 34.10 };
  }

  computeMultiplier_683(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_683() {
    return { id: 683, enabled: true, weight: 34.15 };
  }

  computeMultiplier_684(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_684() {
    return { id: 684, enabled: true, weight: 34.20 };
  }

  computeMultiplier_685(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_685() {
    return { id: 685, enabled: true, weight: 34.25 };
  }

  computeMultiplier_686(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_686() {
    return { id: 686, enabled: true, weight: 34.30 };
  }

  computeMultiplier_687(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_687() {
    return { id: 687, enabled: true, weight: 34.35 };
  }

  computeMultiplier_688(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_688() {
    return { id: 688, enabled: true, weight: 34.40 };
  }

  computeMultiplier_689(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_689() {
    return { id: 689, enabled: true, weight: 34.45 };
  }

  computeMultiplier_690(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_690() {
    return { id: 690, enabled: true, weight: 34.50 };
  }

  computeMultiplier_691(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_691() {
    return { id: 691, enabled: true, weight: 34.55 };
  }

  computeMultiplier_692(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_692() {
    return { id: 692, enabled: true, weight: 34.60 };
  }

  computeMultiplier_693(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_693() {
    return { id: 693, enabled: true, weight: 34.65 };
  }

  computeMultiplier_694(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_694() {
    return { id: 694, enabled: true, weight: 34.70 };
  }

  computeMultiplier_695(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_695() {
    return { id: 695, enabled: true, weight: 34.75 };
  }

  computeMultiplier_696(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_696() {
    return { id: 696, enabled: true, weight: 34.80 };
  }

  computeMultiplier_697(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_697() {
    return { id: 697, enabled: true, weight: 34.85 };
  }

  computeMultiplier_698(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_698() {
    return { id: 698, enabled: true, weight: 34.90 };
  }

  computeMultiplier_699(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_699() {
    return { id: 699, enabled: true, weight: 34.95 };
  }

  computeMultiplier_700(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_700() {
    return { id: 700, enabled: true, weight: 35.00 };
  }

  computeMultiplier_701(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_701() {
    return { id: 701, enabled: true, weight: 35.05 };
  }

  computeMultiplier_702(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_702() {
    return { id: 702, enabled: true, weight: 35.10 };
  }

  computeMultiplier_703(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_703() {
    return { id: 703, enabled: true, weight: 35.15 };
  }

  computeMultiplier_704(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_704() {
    return { id: 704, enabled: true, weight: 35.20 };
  }

  computeMultiplier_705(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_705() {
    return { id: 705, enabled: true, weight: 35.25 };
  }

  computeMultiplier_706(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_706() {
    return { id: 706, enabled: true, weight: 35.30 };
  }

  computeMultiplier_707(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_707() {
    return { id: 707, enabled: true, weight: 35.35 };
  }

  computeMultiplier_708(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_708() {
    return { id: 708, enabled: true, weight: 35.40 };
  }

  computeMultiplier_709(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_709() {
    return { id: 709, enabled: true, weight: 35.45 };
  }

  computeMultiplier_710(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_710() {
    return { id: 710, enabled: true, weight: 35.50 };
  }

  computeMultiplier_711(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_711() {
    return { id: 711, enabled: true, weight: 35.55 };
  }

  computeMultiplier_712(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_712() {
    return { id: 712, enabled: true, weight: 35.60 };
  }

  computeMultiplier_713(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_713() {
    return { id: 713, enabled: true, weight: 35.65 };
  }

  computeMultiplier_714(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_714() {
    return { id: 714, enabled: true, weight: 35.70 };
  }

  computeMultiplier_715(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_715() {
    return { id: 715, enabled: true, weight: 35.75 };
  }

  computeMultiplier_716(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_716() {
    return { id: 716, enabled: true, weight: 35.80 };
  }

  computeMultiplier_717(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_717() {
    return { id: 717, enabled: true, weight: 35.85 };
  }

  computeMultiplier_718(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_718() {
    return { id: 718, enabled: true, weight: 35.90 };
  }

  computeMultiplier_719(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_719() {
    return { id: 719, enabled: true, weight: 35.95 };
  }

  computeMultiplier_720(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_720() {
    return { id: 720, enabled: true, weight: 36.00 };
  }

  computeMultiplier_721(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_721() {
    return { id: 721, enabled: true, weight: 36.05 };
  }

  computeMultiplier_722(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_722() {
    return { id: 722, enabled: true, weight: 36.10 };
  }

  computeMultiplier_723(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_723() {
    return { id: 723, enabled: true, weight: 36.15 };
  }

  computeMultiplier_724(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_724() {
    return { id: 724, enabled: true, weight: 36.20 };
  }

  computeMultiplier_725(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_725() {
    return { id: 725, enabled: true, weight: 36.25 };
  }

  computeMultiplier_726(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_726() {
    return { id: 726, enabled: true, weight: 36.30 };
  }

  computeMultiplier_727(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_727() {
    return { id: 727, enabled: true, weight: 36.35 };
  }

  computeMultiplier_728(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_728() {
    return { id: 728, enabled: true, weight: 36.40 };
  }

  computeMultiplier_729(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_729() {
    return { id: 729, enabled: true, weight: 36.45 };
  }

  computeMultiplier_730(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_730() {
    return { id: 730, enabled: true, weight: 36.50 };
  }

  computeMultiplier_731(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_731() {
    return { id: 731, enabled: true, weight: 36.55 };
  }

  computeMultiplier_732(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_732() {
    return { id: 732, enabled: true, weight: 36.60 };
  }

  computeMultiplier_733(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_733() {
    return { id: 733, enabled: true, weight: 36.65 };
  }

  computeMultiplier_734(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_734() {
    return { id: 734, enabled: true, weight: 36.70 };
  }

  computeMultiplier_735(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_735() {
    return { id: 735, enabled: true, weight: 36.75 };
  }

  computeMultiplier_736(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_736() {
    return { id: 736, enabled: true, weight: 36.80 };
  }

  computeMultiplier_737(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_737() {
    return { id: 737, enabled: true, weight: 36.85 };
  }

  computeMultiplier_738(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_738() {
    return { id: 738, enabled: true, weight: 36.90 };
  }

  computeMultiplier_739(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_739() {
    return { id: 739, enabled: true, weight: 36.95 };
  }

  computeMultiplier_740(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_740() {
    return { id: 740, enabled: true, weight: 37.00 };
  }

  computeMultiplier_741(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_741() {
    return { id: 741, enabled: true, weight: 37.05 };
  }

  computeMultiplier_742(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_742() {
    return { id: 742, enabled: true, weight: 37.10 };
  }

  computeMultiplier_743(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_743() {
    return { id: 743, enabled: true, weight: 37.15 };
  }

  computeMultiplier_744(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_744() {
    return { id: 744, enabled: true, weight: 37.20 };
  }

  computeMultiplier_745(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_745() {
    return { id: 745, enabled: true, weight: 37.25 };
  }

  computeMultiplier_746(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_746() {
    return { id: 746, enabled: true, weight: 37.30 };
  }

  computeMultiplier_747(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_747() {
    return { id: 747, enabled: true, weight: 37.35 };
  }

  computeMultiplier_748(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_748() {
    return { id: 748, enabled: true, weight: 37.40 };
  }

  computeMultiplier_749(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_749() {
    return { id: 749, enabled: true, weight: 37.45 };
  }

  computeMultiplier_750(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_750() {
    return { id: 750, enabled: true, weight: 37.50 };
  }

  computeMultiplier_751(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_751() {
    return { id: 751, enabled: true, weight: 37.55 };
  }

  computeMultiplier_752(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_752() {
    return { id: 752, enabled: true, weight: 37.60 };
  }

  computeMultiplier_753(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_753() {
    return { id: 753, enabled: true, weight: 37.65 };
  }

  computeMultiplier_754(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_754() {
    return { id: 754, enabled: true, weight: 37.70 };
  }

  computeMultiplier_755(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_755() {
    return { id: 755, enabled: true, weight: 37.75 };
  }

  computeMultiplier_756(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_756() {
    return { id: 756, enabled: true, weight: 37.80 };
  }

  computeMultiplier_757(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_757() {
    return { id: 757, enabled: true, weight: 37.85 };
  }

  computeMultiplier_758(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_758() {
    return { id: 758, enabled: true, weight: 37.90 };
  }

  computeMultiplier_759(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_759() {
    return { id: 759, enabled: true, weight: 37.95 };
  }

  computeMultiplier_760(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_760() {
    return { id: 760, enabled: true, weight: 38.00 };
  }

  computeMultiplier_761(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_761() {
    return { id: 761, enabled: true, weight: 38.05 };
  }

  computeMultiplier_762(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_762() {
    return { id: 762, enabled: true, weight: 38.10 };
  }

  computeMultiplier_763(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_763() {
    return { id: 763, enabled: true, weight: 38.15 };
  }

  computeMultiplier_764(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_764() {
    return { id: 764, enabled: true, weight: 38.20 };
  }

  computeMultiplier_765(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_765() {
    return { id: 765, enabled: true, weight: 38.25 };
  }

  computeMultiplier_766(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_766() {
    return { id: 766, enabled: true, weight: 38.30 };
  }

  computeMultiplier_767(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_767() {
    return { id: 767, enabled: true, weight: 38.35 };
  }

  computeMultiplier_768(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_768() {
    return { id: 768, enabled: true, weight: 38.40 };
  }

  computeMultiplier_769(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_769() {
    return { id: 769, enabled: true, weight: 38.45 };
  }

  computeMultiplier_770(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_770() {
    return { id: 770, enabled: true, weight: 38.50 };
  }

  computeMultiplier_771(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_771() {
    return { id: 771, enabled: true, weight: 38.55 };
  }

  computeMultiplier_772(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_772() {
    return { id: 772, enabled: true, weight: 38.60 };
  }

  computeMultiplier_773(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_773() {
    return { id: 773, enabled: true, weight: 38.65 };
  }

  computeMultiplier_774(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_774() {
    return { id: 774, enabled: true, weight: 38.70 };
  }

  computeMultiplier_775(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_775() {
    return { id: 775, enabled: true, weight: 38.75 };
  }

  computeMultiplier_776(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_776() {
    return { id: 776, enabled: true, weight: 38.80 };
  }

  computeMultiplier_777(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_777() {
    return { id: 777, enabled: true, weight: 38.85 };
  }

  computeMultiplier_778(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_778() {
    return { id: 778, enabled: true, weight: 38.90 };
  }

  computeMultiplier_779(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_779() {
    return { id: 779, enabled: true, weight: 38.95 };
  }

  computeMultiplier_780(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_780() {
    return { id: 780, enabled: true, weight: 39.00 };
  }

  computeMultiplier_781(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_781() {
    return { id: 781, enabled: true, weight: 39.05 };
  }

  computeMultiplier_782(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_782() {
    return { id: 782, enabled: true, weight: 39.10 };
  }

  computeMultiplier_783(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_783() {
    return { id: 783, enabled: true, weight: 39.15 };
  }

  computeMultiplier_784(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_784() {
    return { id: 784, enabled: true, weight: 39.20 };
  }

  computeMultiplier_785(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_785() {
    return { id: 785, enabled: true, weight: 39.25 };
  }

  computeMultiplier_786(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_786() {
    return { id: 786, enabled: true, weight: 39.30 };
  }

  computeMultiplier_787(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_787() {
    return { id: 787, enabled: true, weight: 39.35 };
  }

  computeMultiplier_788(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_788() {
    return { id: 788, enabled: true, weight: 39.40 };
  }

  computeMultiplier_789(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_789() {
    return { id: 789, enabled: true, weight: 39.45 };
  }

  computeMultiplier_790(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_790() {
    return { id: 790, enabled: true, weight: 39.50 };
  }

  computeMultiplier_791(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_791() {
    return { id: 791, enabled: true, weight: 39.55 };
  }

  computeMultiplier_792(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_792() {
    return { id: 792, enabled: true, weight: 39.60 };
  }

  computeMultiplier_793(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_793() {
    return { id: 793, enabled: true, weight: 39.65 };
  }

  computeMultiplier_794(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_794() {
    return { id: 794, enabled: true, weight: 39.70 };
  }

  computeMultiplier_795(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_795() {
    return { id: 795, enabled: true, weight: 39.75 };
  }

  computeMultiplier_796(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_796() {
    return { id: 796, enabled: true, weight: 39.80 };
  }

  computeMultiplier_797(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_797() {
    return { id: 797, enabled: true, weight: 39.85 };
  }

  computeMultiplier_798(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_798() {
    return { id: 798, enabled: true, weight: 39.90 };
  }

  computeMultiplier_799(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_799() {
    return { id: 799, enabled: true, weight: 39.95 };
  }

  computeMultiplier_800(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_800() {
    return { id: 800, enabled: true, weight: 40.00 };
  }

  computeMultiplier_801(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_801() {
    return { id: 801, enabled: true, weight: 40.05 };
  }

  computeMultiplier_802(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_802() {
    return { id: 802, enabled: true, weight: 40.10 };
  }

  computeMultiplier_803(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_803() {
    return { id: 803, enabled: true, weight: 40.15 };
  }

  computeMultiplier_804(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_804() {
    return { id: 804, enabled: true, weight: 40.20 };
  }

  computeMultiplier_805(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_805() {
    return { id: 805, enabled: true, weight: 40.25 };
  }

  computeMultiplier_806(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_806() {
    return { id: 806, enabled: true, weight: 40.30 };
  }

  computeMultiplier_807(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_807() {
    return { id: 807, enabled: true, weight: 40.35 };
  }

  computeMultiplier_808(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_808() {
    return { id: 808, enabled: true, weight: 40.40 };
  }

  computeMultiplier_809(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_809() {
    return { id: 809, enabled: true, weight: 40.45 };
  }

  computeMultiplier_810(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_810() {
    return { id: 810, enabled: true, weight: 40.50 };
  }

  computeMultiplier_811(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_811() {
    return { id: 811, enabled: true, weight: 40.55 };
  }

  computeMultiplier_812(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_812() {
    return { id: 812, enabled: true, weight: 40.60 };
  }

  computeMultiplier_813(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_813() {
    return { id: 813, enabled: true, weight: 40.65 };
  }

  computeMultiplier_814(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_814() {
    return { id: 814, enabled: true, weight: 40.70 };
  }

  computeMultiplier_815(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_815() {
    return { id: 815, enabled: true, weight: 40.75 };
  }

  computeMultiplier_816(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_816() {
    return { id: 816, enabled: true, weight: 40.80 };
  }

  computeMultiplier_817(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_817() {
    return { id: 817, enabled: true, weight: 40.85 };
  }

  computeMultiplier_818(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_818() {
    return { id: 818, enabled: true, weight: 40.90 };
  }

  computeMultiplier_819(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_819() {
    return { id: 819, enabled: true, weight: 40.95 };
  }

  computeMultiplier_820(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_820() {
    return { id: 820, enabled: true, weight: 41.00 };
  }

  computeMultiplier_821(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_821() {
    return { id: 821, enabled: true, weight: 41.05 };
  }

  computeMultiplier_822(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_822() {
    return { id: 822, enabled: true, weight: 41.10 };
  }

  computeMultiplier_823(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_823() {
    return { id: 823, enabled: true, weight: 41.15 };
  }

  computeMultiplier_824(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_824() {
    return { id: 824, enabled: true, weight: 41.20 };
  }

  computeMultiplier_825(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_825() {
    return { id: 825, enabled: true, weight: 41.25 };
  }

  computeMultiplier_826(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_826() {
    return { id: 826, enabled: true, weight: 41.30 };
  }

  computeMultiplier_827(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_827() {
    return { id: 827, enabled: true, weight: 41.35 };
  }

  computeMultiplier_828(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_828() {
    return { id: 828, enabled: true, weight: 41.40 };
  }

  computeMultiplier_829(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_829() {
    return { id: 829, enabled: true, weight: 41.45 };
  }

  computeMultiplier_830(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_830() {
    return { id: 830, enabled: true, weight: 41.50 };
  }

  computeMultiplier_831(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_831() {
    return { id: 831, enabled: true, weight: 41.55 };
  }

  computeMultiplier_832(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_832() {
    return { id: 832, enabled: true, weight: 41.60 };
  }

  computeMultiplier_833(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_833() {
    return { id: 833, enabled: true, weight: 41.65 };
  }

  computeMultiplier_834(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_834() {
    return { id: 834, enabled: true, weight: 41.70 };
  }

  computeMultiplier_835(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_835() {
    return { id: 835, enabled: true, weight: 41.75 };
  }

  computeMultiplier_836(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_836() {
    return { id: 836, enabled: true, weight: 41.80 };
  }

  computeMultiplier_837(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_837() {
    return { id: 837, enabled: true, weight: 41.85 };
  }

  computeMultiplier_838(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_838() {
    return { id: 838, enabled: true, weight: 41.90 };
  }

  computeMultiplier_839(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_839() {
    return { id: 839, enabled: true, weight: 41.95 };
  }

  computeMultiplier_840(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_840() {
    return { id: 840, enabled: true, weight: 42.00 };
  }

  computeMultiplier_841(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_841() {
    return { id: 841, enabled: true, weight: 42.05 };
  }

  computeMultiplier_842(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_842() {
    return { id: 842, enabled: true, weight: 42.10 };
  }

  computeMultiplier_843(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_843() {
    return { id: 843, enabled: true, weight: 42.15 };
  }

  computeMultiplier_844(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_844() {
    return { id: 844, enabled: true, weight: 42.20 };
  }

  computeMultiplier_845(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_845() {
    return { id: 845, enabled: true, weight: 42.25 };
  }

  computeMultiplier_846(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_846() {
    return { id: 846, enabled: true, weight: 42.30 };
  }

  computeMultiplier_847(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_847() {
    return { id: 847, enabled: true, weight: 42.35 };
  }

  computeMultiplier_848(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_848() {
    return { id: 848, enabled: true, weight: 42.40 };
  }

  computeMultiplier_849(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_849() {
    return { id: 849, enabled: true, weight: 42.45 };
  }

  computeMultiplier_850(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_850() {
    return { id: 850, enabled: true, weight: 42.50 };
  }

  computeMultiplier_851(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_851() {
    return { id: 851, enabled: true, weight: 42.55 };
  }

  computeMultiplier_852(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_852() {
    return { id: 852, enabled: true, weight: 42.60 };
  }

  computeMultiplier_853(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_853() {
    return { id: 853, enabled: true, weight: 42.65 };
  }

  computeMultiplier_854(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_854() {
    return { id: 854, enabled: true, weight: 42.70 };
  }

  computeMultiplier_855(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_855() {
    return { id: 855, enabled: true, weight: 42.75 };
  }

  computeMultiplier_856(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_856() {
    return { id: 856, enabled: true, weight: 42.80 };
  }

  computeMultiplier_857(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_857() {
    return { id: 857, enabled: true, weight: 42.85 };
  }

  computeMultiplier_858(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_858() {
    return { id: 858, enabled: true, weight: 42.90 };
  }

  computeMultiplier_859(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_859() {
    return { id: 859, enabled: true, weight: 42.95 };
  }

  computeMultiplier_860(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_860() {
    return { id: 860, enabled: true, weight: 43.00 };
  }

  computeMultiplier_861(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_861() {
    return { id: 861, enabled: true, weight: 43.05 };
  }

  computeMultiplier_862(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_862() {
    return { id: 862, enabled: true, weight: 43.10 };
  }

  computeMultiplier_863(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_863() {
    return { id: 863, enabled: true, weight: 43.15 };
  }

  computeMultiplier_864(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_864() {
    return { id: 864, enabled: true, weight: 43.20 };
  }

  computeMultiplier_865(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_865() {
    return { id: 865, enabled: true, weight: 43.25 };
  }

  computeMultiplier_866(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_866() {
    return { id: 866, enabled: true, weight: 43.30 };
  }

  computeMultiplier_867(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_867() {
    return { id: 867, enabled: true, weight: 43.35 };
  }

  computeMultiplier_868(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_868() {
    return { id: 868, enabled: true, weight: 43.40 };
  }

  computeMultiplier_869(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_869() {
    return { id: 869, enabled: true, weight: 43.45 };
  }

  computeMultiplier_870(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_870() {
    return { id: 870, enabled: true, weight: 43.50 };
  }

  computeMultiplier_871(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_871() {
    return { id: 871, enabled: true, weight: 43.55 };
  }

  computeMultiplier_872(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_872() {
    return { id: 872, enabled: true, weight: 43.60 };
  }

  computeMultiplier_873(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_873() {
    return { id: 873, enabled: true, weight: 43.65 };
  }

  computeMultiplier_874(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_874() {
    return { id: 874, enabled: true, weight: 43.70 };
  }

  computeMultiplier_875(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_875() {
    return { id: 875, enabled: true, weight: 43.75 };
  }

  computeMultiplier_876(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_876() {
    return { id: 876, enabled: true, weight: 43.80 };
  }

  computeMultiplier_877(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_877() {
    return { id: 877, enabled: true, weight: 43.85 };
  }

  computeMultiplier_878(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_878() {
    return { id: 878, enabled: true, weight: 43.90 };
  }

  computeMultiplier_879(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_879() {
    return { id: 879, enabled: true, weight: 43.95 };
  }

  computeMultiplier_880(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_880() {
    return { id: 880, enabled: true, weight: 44.00 };
  }

  computeMultiplier_881(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_881() {
    return { id: 881, enabled: true, weight: 44.05 };
  }

  computeMultiplier_882(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_882() {
    return { id: 882, enabled: true, weight: 44.10 };
  }

  computeMultiplier_883(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_883() {
    return { id: 883, enabled: true, weight: 44.15 };
  }

  computeMultiplier_884(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_884() {
    return { id: 884, enabled: true, weight: 44.20 };
  }

  computeMultiplier_885(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_885() {
    return { id: 885, enabled: true, weight: 44.25 };
  }

  computeMultiplier_886(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_886() {
    return { id: 886, enabled: true, weight: 44.30 };
  }

  computeMultiplier_887(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_887() {
    return { id: 887, enabled: true, weight: 44.35 };
  }

  computeMultiplier_888(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_888() {
    return { id: 888, enabled: true, weight: 44.40 };
  }

  computeMultiplier_889(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_889() {
    return { id: 889, enabled: true, weight: 44.45 };
  }

  computeMultiplier_890(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_890() {
    return { id: 890, enabled: true, weight: 44.50 };
  }

  computeMultiplier_891(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_891() {
    return { id: 891, enabled: true, weight: 44.55 };
  }

  computeMultiplier_892(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_892() {
    return { id: 892, enabled: true, weight: 44.60 };
  }

  computeMultiplier_893(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_893() {
    return { id: 893, enabled: true, weight: 44.65 };
  }

  computeMultiplier_894(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_894() {
    return { id: 894, enabled: true, weight: 44.70 };
  }

  computeMultiplier_895(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_895() {
    return { id: 895, enabled: true, weight: 44.75 };
  }

  computeMultiplier_896(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_896() {
    return { id: 896, enabled: true, weight: 44.80 };
  }

  computeMultiplier_897(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_897() {
    return { id: 897, enabled: true, weight: 44.85 };
  }

  computeMultiplier_898(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_898() {
    return { id: 898, enabled: true, weight: 44.90 };
  }

  computeMultiplier_899(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_899() {
    return { id: 899, enabled: true, weight: 44.95 };
  }

  computeMultiplier_900(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_900() {
    return { id: 900, enabled: true, weight: 45.00 };
  }

  computeMultiplier_901(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_901() {
    return { id: 901, enabled: true, weight: 45.05 };
  }

  computeMultiplier_902(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_902() {
    return { id: 902, enabled: true, weight: 45.10 };
  }

  computeMultiplier_903(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_903() {
    return { id: 903, enabled: true, weight: 45.15 };
  }

  computeMultiplier_904(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_904() {
    return { id: 904, enabled: true, weight: 45.20 };
  }

  computeMultiplier_905(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_905() {
    return { id: 905, enabled: true, weight: 45.25 };
  }

  computeMultiplier_906(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_906() {
    return { id: 906, enabled: true, weight: 45.30 };
  }

  computeMultiplier_907(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_907() {
    return { id: 907, enabled: true, weight: 45.35 };
  }

  computeMultiplier_908(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_908() {
    return { id: 908, enabled: true, weight: 45.40 };
  }

  computeMultiplier_909(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_909() {
    return { id: 909, enabled: true, weight: 45.45 };
  }

  computeMultiplier_910(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_910() {
    return { id: 910, enabled: true, weight: 45.50 };
  }

  computeMultiplier_911(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_911() {
    return { id: 911, enabled: true, weight: 45.55 };
  }

  computeMultiplier_912(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_912() {
    return { id: 912, enabled: true, weight: 45.60 };
  }

  computeMultiplier_913(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_913() {
    return { id: 913, enabled: true, weight: 45.65 };
  }

  computeMultiplier_914(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_914() {
    return { id: 914, enabled: true, weight: 45.70 };
  }

  computeMultiplier_915(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_915() {
    return { id: 915, enabled: true, weight: 45.75 };
  }

  computeMultiplier_916(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_916() {
    return { id: 916, enabled: true, weight: 45.80 };
  }

  computeMultiplier_917(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_917() {
    return { id: 917, enabled: true, weight: 45.85 };
  }

  computeMultiplier_918(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_918() {
    return { id: 918, enabled: true, weight: 45.90 };
  }

  computeMultiplier_919(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_919() {
    return { id: 919, enabled: true, weight: 45.95 };
  }

  computeMultiplier_920(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_920() {
    return { id: 920, enabled: true, weight: 46.00 };
  }

  computeMultiplier_921(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_921() {
    return { id: 921, enabled: true, weight: 46.05 };
  }

  computeMultiplier_922(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_922() {
    return { id: 922, enabled: true, weight: 46.10 };
  }

  computeMultiplier_923(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_923() {
    return { id: 923, enabled: true, weight: 46.15 };
  }

  computeMultiplier_924(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_924() {
    return { id: 924, enabled: true, weight: 46.20 };
  }

  computeMultiplier_925(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_925() {
    return { id: 925, enabled: true, weight: 46.25 };
  }

  computeMultiplier_926(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_926() {
    return { id: 926, enabled: true, weight: 46.30 };
  }

  computeMultiplier_927(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_927() {
    return { id: 927, enabled: true, weight: 46.35 };
  }

  computeMultiplier_928(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_928() {
    return { id: 928, enabled: true, weight: 46.40 };
  }

  computeMultiplier_929(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_929() {
    return { id: 929, enabled: true, weight: 46.45 };
  }

  computeMultiplier_930(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_930() {
    return { id: 930, enabled: true, weight: 46.50 };
  }

  computeMultiplier_931(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_931() {
    return { id: 931, enabled: true, weight: 46.55 };
  }

  computeMultiplier_932(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_932() {
    return { id: 932, enabled: true, weight: 46.60 };
  }

  computeMultiplier_933(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_933() {
    return { id: 933, enabled: true, weight: 46.65 };
  }

  computeMultiplier_934(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_934() {
    return { id: 934, enabled: true, weight: 46.70 };
  }

  computeMultiplier_935(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_935() {
    return { id: 935, enabled: true, weight: 46.75 };
  }

  computeMultiplier_936(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_936() {
    return { id: 936, enabled: true, weight: 46.80 };
  }

  computeMultiplier_937(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_937() {
    return { id: 937, enabled: true, weight: 46.85 };
  }

  computeMultiplier_938(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_938() {
    return { id: 938, enabled: true, weight: 46.90 };
  }

  computeMultiplier_939(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_939() {
    return { id: 939, enabled: true, weight: 46.95 };
  }

  computeMultiplier_940(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_940() {
    return { id: 940, enabled: true, weight: 47.00 };
  }

  computeMultiplier_941(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_941() {
    return { id: 941, enabled: true, weight: 47.05 };
  }

  computeMultiplier_942(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_942() {
    return { id: 942, enabled: true, weight: 47.10 };
  }

  computeMultiplier_943(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_943() {
    return { id: 943, enabled: true, weight: 47.15 };
  }

  computeMultiplier_944(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_944() {
    return { id: 944, enabled: true, weight: 47.20 };
  }

  computeMultiplier_945(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_945() {
    return { id: 945, enabled: true, weight: 47.25 };
  }

  computeMultiplier_946(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_946() {
    return { id: 946, enabled: true, weight: 47.30 };
  }

  computeMultiplier_947(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_947() {
    return { id: 947, enabled: true, weight: 47.35 };
  }

  computeMultiplier_948(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_948() {
    return { id: 948, enabled: true, weight: 47.40 };
  }

  computeMultiplier_949(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_949() {
    return { id: 949, enabled: true, weight: 47.45 };
  }

  computeMultiplier_950(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_950() {
    return { id: 950, enabled: true, weight: 47.50 };
  }

  computeMultiplier_951(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_951() {
    return { id: 951, enabled: true, weight: 47.55 };
  }

  computeMultiplier_952(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_952() {
    return { id: 952, enabled: true, weight: 47.60 };
  }

  computeMultiplier_953(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_953() {
    return { id: 953, enabled: true, weight: 47.65 };
  }

  computeMultiplier_954(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_954() {
    return { id: 954, enabled: true, weight: 47.70 };
  }

  computeMultiplier_955(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_955() {
    return { id: 955, enabled: true, weight: 47.75 };
  }

  computeMultiplier_956(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_956() {
    return { id: 956, enabled: true, weight: 47.80 };
  }

  computeMultiplier_957(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_957() {
    return { id: 957, enabled: true, weight: 47.85 };
  }

  computeMultiplier_958(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_958() {
    return { id: 958, enabled: true, weight: 47.90 };
  }

  computeMultiplier_959(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_959() {
    return { id: 959, enabled: true, weight: 47.95 };
  }

  computeMultiplier_960(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_960() {
    return { id: 960, enabled: true, weight: 48.00 };
  }

  computeMultiplier_961(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_961() {
    return { id: 961, enabled: true, weight: 48.05 };
  }

  computeMultiplier_962(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_962() {
    return { id: 962, enabled: true, weight: 48.10 };
  }

  computeMultiplier_963(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_963() {
    return { id: 963, enabled: true, weight: 48.15 };
  }

  computeMultiplier_964(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_964() {
    return { id: 964, enabled: true, weight: 48.20 };
  }

  computeMultiplier_965(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_965() {
    return { id: 965, enabled: true, weight: 48.25 };
  }

  computeMultiplier_966(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_966() {
    return { id: 966, enabled: true, weight: 48.30 };
  }

  computeMultiplier_967(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_967() {
    return { id: 967, enabled: true, weight: 48.35 };
  }

  computeMultiplier_968(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_968() {
    return { id: 968, enabled: true, weight: 48.40 };
  }

  computeMultiplier_969(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_969() {
    return { id: 969, enabled: true, weight: 48.45 };
  }

  computeMultiplier_970(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_970() {
    return { id: 970, enabled: true, weight: 48.50 };
  }

  computeMultiplier_971(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_971() {
    return { id: 971, enabled: true, weight: 48.55 };
  }

  computeMultiplier_972(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_972() {
    return { id: 972, enabled: true, weight: 48.60 };
  }

  computeMultiplier_973(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_973() {
    return { id: 973, enabled: true, weight: 48.65 };
  }

  computeMultiplier_974(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_974() {
    return { id: 974, enabled: true, weight: 48.70 };
  }

  computeMultiplier_975(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_975() {
    return { id: 975, enabled: true, weight: 48.75 };
  }

  computeMultiplier_976(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_976() {
    return { id: 976, enabled: true, weight: 48.80 };
  }

  computeMultiplier_977(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_977() {
    return { id: 977, enabled: true, weight: 48.85 };
  }

  computeMultiplier_978(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_978() {
    return { id: 978, enabled: true, weight: 48.90 };
  }

  computeMultiplier_979(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_979() {
    return { id: 979, enabled: true, weight: 48.95 };
  }

  computeMultiplier_980(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_980() {
    return { id: 980, enabled: true, weight: 49.00 };
  }

  computeMultiplier_981(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_981() {
    return { id: 981, enabled: true, weight: 49.05 };
  }

  computeMultiplier_982(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_982() {
    return { id: 982, enabled: true, weight: 49.10 };
  }

  computeMultiplier_983(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_983() {
    return { id: 983, enabled: true, weight: 49.15 };
  }

  computeMultiplier_984(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_984() {
    return { id: 984, enabled: true, weight: 49.20 };
  }

  computeMultiplier_985(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_985() {
    return { id: 985, enabled: true, weight: 49.25 };
  }

  computeMultiplier_986(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_986() {
    return { id: 986, enabled: true, weight: 49.30 };
  }

  computeMultiplier_987(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_987() {
    return { id: 987, enabled: true, weight: 49.35 };
  }

  computeMultiplier_988(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_988() {
    return { id: 988, enabled: true, weight: 49.40 };
  }

  computeMultiplier_989(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_989() {
    return { id: 989, enabled: true, weight: 49.45 };
  }

  computeMultiplier_990(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_990() {
    return { id: 990, enabled: true, weight: 49.50 };
  }

  computeMultiplier_991(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_991() {
    return { id: 991, enabled: true, weight: 49.55 };
  }

  computeMultiplier_992(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_992() {
    return { id: 992, enabled: true, weight: 49.60 };
  }

  computeMultiplier_993(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_993() {
    return { id: 993, enabled: true, weight: 49.65 };
  }

  computeMultiplier_994(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_994() {
    return { id: 994, enabled: true, weight: 49.70 };
  }

  computeMultiplier_995(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_995() {
    return { id: 995, enabled: true, weight: 49.75 };
  }

  computeMultiplier_996(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_996() {
    return { id: 996, enabled: true, weight: 49.80 };
  }

  computeMultiplier_997(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_997() {
    return { id: 997, enabled: true, weight: 49.85 };
  }

  computeMultiplier_998(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_998() {
    return { id: 998, enabled: true, weight: 49.90 };
  }

  computeMultiplier_999(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_999() {
    return { id: 999, enabled: true, weight: 49.95 };
  }

  computeMultiplier_1000(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1000() {
    return { id: 1000, enabled: true, weight: 50.00 };
  }

  computeMultiplier_1001(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1001() {
    return { id: 1001, enabled: true, weight: 50.05 };
  }

  computeMultiplier_1002(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1002() {
    return { id: 1002, enabled: true, weight: 50.10 };
  }

  computeMultiplier_1003(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1003() {
    return { id: 1003, enabled: true, weight: 50.15 };
  }

  computeMultiplier_1004(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1004() {
    return { id: 1004, enabled: true, weight: 50.20 };
  }

  computeMultiplier_1005(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1005() {
    return { id: 1005, enabled: true, weight: 50.25 };
  }

  computeMultiplier_1006(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1006() {
    return { id: 1006, enabled: true, weight: 50.30 };
  }

  computeMultiplier_1007(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1007() {
    return { id: 1007, enabled: true, weight: 50.35 };
  }

  computeMultiplier_1008(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1008() {
    return { id: 1008, enabled: true, weight: 50.40 };
  }

  computeMultiplier_1009(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1009() {
    return { id: 1009, enabled: true, weight: 50.45 };
  }

  computeMultiplier_1010(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1010() {
    return { id: 1010, enabled: true, weight: 50.50 };
  }

  computeMultiplier_1011(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1011() {
    return { id: 1011, enabled: true, weight: 50.55 };
  }

  computeMultiplier_1012(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1012() {
    return { id: 1012, enabled: true, weight: 50.60 };
  }

  computeMultiplier_1013(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1013() {
    return { id: 1013, enabled: true, weight: 50.65 };
  }

  computeMultiplier_1014(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1014() {
    return { id: 1014, enabled: true, weight: 50.70 };
  }

  computeMultiplier_1015(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1015() {
    return { id: 1015, enabled: true, weight: 50.75 };
  }

  computeMultiplier_1016(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1016() {
    return { id: 1016, enabled: true, weight: 50.80 };
  }

  computeMultiplier_1017(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1017() {
    return { id: 1017, enabled: true, weight: 50.85 };
  }

  computeMultiplier_1018(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1018() {
    return { id: 1018, enabled: true, weight: 50.90 };
  }

  computeMultiplier_1019(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1019() {
    return { id: 1019, enabled: true, weight: 50.95 };
  }

  computeMultiplier_1020(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1020() {
    return { id: 1020, enabled: true, weight: 51.00 };
  }

  computeMultiplier_1021(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1021() {
    return { id: 1021, enabled: true, weight: 51.05 };
  }

  computeMultiplier_1022(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1022() {
    return { id: 1022, enabled: true, weight: 51.10 };
  }

  computeMultiplier_1023(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1023() {
    return { id: 1023, enabled: true, weight: 51.15 };
  }

  computeMultiplier_1024(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1024() {
    return { id: 1024, enabled: true, weight: 51.20 };
  }

  computeMultiplier_1025(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1025() {
    return { id: 1025, enabled: true, weight: 51.25 };
  }

  computeMultiplier_1026(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1026() {
    return { id: 1026, enabled: true, weight: 51.30 };
  }

  computeMultiplier_1027(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1027() {
    return { id: 1027, enabled: true, weight: 51.35 };
  }

  computeMultiplier_1028(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1028() {
    return { id: 1028, enabled: true, weight: 51.40 };
  }

  computeMultiplier_1029(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1029() {
    return { id: 1029, enabled: true, weight: 51.45 };
  }

  computeMultiplier_1030(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1030() {
    return { id: 1030, enabled: true, weight: 51.50 };
  }

  computeMultiplier_1031(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1031() {
    return { id: 1031, enabled: true, weight: 51.55 };
  }

  computeMultiplier_1032(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1032() {
    return { id: 1032, enabled: true, weight: 51.60 };
  }

  computeMultiplier_1033(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1033() {
    return { id: 1033, enabled: true, weight: 51.65 };
  }

  computeMultiplier_1034(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1034() {
    return { id: 1034, enabled: true, weight: 51.70 };
  }

  computeMultiplier_1035(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1035() {
    return { id: 1035, enabled: true, weight: 51.75 };
  }

  computeMultiplier_1036(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1036() {
    return { id: 1036, enabled: true, weight: 51.80 };
  }

  computeMultiplier_1037(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1037() {
    return { id: 1037, enabled: true, weight: 51.85 };
  }

  computeMultiplier_1038(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1038() {
    return { id: 1038, enabled: true, weight: 51.90 };
  }

  computeMultiplier_1039(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1039() {
    return { id: 1039, enabled: true, weight: 51.95 };
  }

  computeMultiplier_1040(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1040() {
    return { id: 1040, enabled: true, weight: 52.00 };
  }

  computeMultiplier_1041(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1041() {
    return { id: 1041, enabled: true, weight: 52.05 };
  }

  computeMultiplier_1042(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1042() {
    return { id: 1042, enabled: true, weight: 52.10 };
  }

  computeMultiplier_1043(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1043() {
    return { id: 1043, enabled: true, weight: 52.15 };
  }

  computeMultiplier_1044(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1044() {
    return { id: 1044, enabled: true, weight: 52.20 };
  }

  computeMultiplier_1045(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1045() {
    return { id: 1045, enabled: true, weight: 52.25 };
  }

  computeMultiplier_1046(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1046() {
    return { id: 1046, enabled: true, weight: 52.30 };
  }

  computeMultiplier_1047(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1047() {
    return { id: 1047, enabled: true, weight: 52.35 };
  }

  computeMultiplier_1048(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1048() {
    return { id: 1048, enabled: true, weight: 52.40 };
  }

  computeMultiplier_1049(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1049() {
    return { id: 1049, enabled: true, weight: 52.45 };
  }

  computeMultiplier_1050(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1050() {
    return { id: 1050, enabled: true, weight: 52.50 };
  }

  computeMultiplier_1051(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1051() {
    return { id: 1051, enabled: true, weight: 52.55 };
  }

  computeMultiplier_1052(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1052() {
    return { id: 1052, enabled: true, weight: 52.60 };
  }

  computeMultiplier_1053(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1053() {
    return { id: 1053, enabled: true, weight: 52.65 };
  }

  computeMultiplier_1054(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1054() {
    return { id: 1054, enabled: true, weight: 52.70 };
  }

  computeMultiplier_1055(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1055() {
    return { id: 1055, enabled: true, weight: 52.75 };
  }

  computeMultiplier_1056(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1056() {
    return { id: 1056, enabled: true, weight: 52.80 };
  }

  computeMultiplier_1057(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1057() {
    return { id: 1057, enabled: true, weight: 52.85 };
  }

  computeMultiplier_1058(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1058() {
    return { id: 1058, enabled: true, weight: 52.90 };
  }

  computeMultiplier_1059(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1059() {
    return { id: 1059, enabled: true, weight: 52.95 };
  }

  computeMultiplier_1060(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1060() {
    return { id: 1060, enabled: true, weight: 53.00 };
  }

  computeMultiplier_1061(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1061() {
    return { id: 1061, enabled: true, weight: 53.05 };
  }

  computeMultiplier_1062(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1062() {
    return { id: 1062, enabled: true, weight: 53.10 };
  }

  computeMultiplier_1063(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1063() {
    return { id: 1063, enabled: true, weight: 53.15 };
  }

  computeMultiplier_1064(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1064() {
    return { id: 1064, enabled: true, weight: 53.20 };
  }

  computeMultiplier_1065(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1065() {
    return { id: 1065, enabled: true, weight: 53.25 };
  }

  computeMultiplier_1066(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1066() {
    return { id: 1066, enabled: true, weight: 53.30 };
  }

  computeMultiplier_1067(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1067() {
    return { id: 1067, enabled: true, weight: 53.35 };
  }

  computeMultiplier_1068(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1068() {
    return { id: 1068, enabled: true, weight: 53.40 };
  }

  computeMultiplier_1069(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1069() {
    return { id: 1069, enabled: true, weight: 53.45 };
  }

  computeMultiplier_1070(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1070() {
    return { id: 1070, enabled: true, weight: 53.50 };
  }

  computeMultiplier_1071(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1071() {
    return { id: 1071, enabled: true, weight: 53.55 };
  }

  computeMultiplier_1072(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1072() {
    return { id: 1072, enabled: true, weight: 53.60 };
  }

  computeMultiplier_1073(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1073() {
    return { id: 1073, enabled: true, weight: 53.65 };
  }

  computeMultiplier_1074(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1074() {
    return { id: 1074, enabled: true, weight: 53.70 };
  }

  computeMultiplier_1075(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1075() {
    return { id: 1075, enabled: true, weight: 53.75 };
  }

  computeMultiplier_1076(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1076() {
    return { id: 1076, enabled: true, weight: 53.80 };
  }

  computeMultiplier_1077(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1077() {
    return { id: 1077, enabled: true, weight: 53.85 };
  }

  computeMultiplier_1078(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1078() {
    return { id: 1078, enabled: true, weight: 53.90 };
  }

  computeMultiplier_1079(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1079() {
    return { id: 1079, enabled: true, weight: 53.95 };
  }

  computeMultiplier_1080(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1080() {
    return { id: 1080, enabled: true, weight: 54.00 };
  }

  computeMultiplier_1081(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1081() {
    return { id: 1081, enabled: true, weight: 54.05 };
  }

  computeMultiplier_1082(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1082() {
    return { id: 1082, enabled: true, weight: 54.10 };
  }

  computeMultiplier_1083(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1083() {
    return { id: 1083, enabled: true, weight: 54.15 };
  }

  computeMultiplier_1084(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1084() {
    return { id: 1084, enabled: true, weight: 54.20 };
  }

  computeMultiplier_1085(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1085() {
    return { id: 1085, enabled: true, weight: 54.25 };
  }

  computeMultiplier_1086(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1086() {
    return { id: 1086, enabled: true, weight: 54.30 };
  }

  computeMultiplier_1087(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1087() {
    return { id: 1087, enabled: true, weight: 54.35 };
  }

  computeMultiplier_1088(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1088() {
    return { id: 1088, enabled: true, weight: 54.40 };
  }

  computeMultiplier_1089(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1089() {
    return { id: 1089, enabled: true, weight: 54.45 };
  }

  computeMultiplier_1090(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1090() {
    return { id: 1090, enabled: true, weight: 54.50 };
  }

  computeMultiplier_1091(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1091() {
    return { id: 1091, enabled: true, weight: 54.55 };
  }

  computeMultiplier_1092(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1092() {
    return { id: 1092, enabled: true, weight: 54.60 };
  }

  computeMultiplier_1093(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1093() {
    return { id: 1093, enabled: true, weight: 54.65 };
  }

  computeMultiplier_1094(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1094() {
    return { id: 1094, enabled: true, weight: 54.70 };
  }

  computeMultiplier_1095(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1095() {
    return { id: 1095, enabled: true, weight: 54.75 };
  }

  computeMultiplier_1096(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1096() {
    return { id: 1096, enabled: true, weight: 54.80 };
  }

  computeMultiplier_1097(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1097() {
    return { id: 1097, enabled: true, weight: 54.85 };
  }

  computeMultiplier_1098(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1098() {
    return { id: 1098, enabled: true, weight: 54.90 };
  }

  computeMultiplier_1099(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1099() {
    return { id: 1099, enabled: true, weight: 54.95 };
  }

  computeMultiplier_1100(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1100() {
    return { id: 1100, enabled: true, weight: 55.00 };
  }

  computeMultiplier_1101(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1101() {
    return { id: 1101, enabled: true, weight: 55.05 };
  }

  computeMultiplier_1102(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1102() {
    return { id: 1102, enabled: true, weight: 55.10 };
  }

  computeMultiplier_1103(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1103() {
    return { id: 1103, enabled: true, weight: 55.15 };
  }

  computeMultiplier_1104(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1104() {
    return { id: 1104, enabled: true, weight: 55.20 };
  }

  computeMultiplier_1105(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1105() {
    return { id: 1105, enabled: true, weight: 55.25 };
  }

  computeMultiplier_1106(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1106() {
    return { id: 1106, enabled: true, weight: 55.30 };
  }

  computeMultiplier_1107(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1107() {
    return { id: 1107, enabled: true, weight: 55.35 };
  }

  computeMultiplier_1108(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1108() {
    return { id: 1108, enabled: true, weight: 55.40 };
  }

  computeMultiplier_1109(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1109() {
    return { id: 1109, enabled: true, weight: 55.45 };
  }

  computeMultiplier_1110(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1110() {
    return { id: 1110, enabled: true, weight: 55.50 };
  }

  computeMultiplier_1111(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1111() {
    return { id: 1111, enabled: true, weight: 55.55 };
  }

  computeMultiplier_1112(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1112() {
    return { id: 1112, enabled: true, weight: 55.60 };
  }

  computeMultiplier_1113(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1113() {
    return { id: 1113, enabled: true, weight: 55.65 };
  }

  computeMultiplier_1114(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1114() {
    return { id: 1114, enabled: true, weight: 55.70 };
  }

  computeMultiplier_1115(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1115() {
    return { id: 1115, enabled: true, weight: 55.75 };
  }

  computeMultiplier_1116(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1116() {
    return { id: 1116, enabled: true, weight: 55.80 };
  }

  computeMultiplier_1117(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1117() {
    return { id: 1117, enabled: true, weight: 55.85 };
  }

  computeMultiplier_1118(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1118() {
    return { id: 1118, enabled: true, weight: 55.90 };
  }

  computeMultiplier_1119(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1119() {
    return { id: 1119, enabled: true, weight: 55.95 };
  }

  computeMultiplier_1120(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1120() {
    return { id: 1120, enabled: true, weight: 56.00 };
  }

  computeMultiplier_1121(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1121() {
    return { id: 1121, enabled: true, weight: 56.05 };
  }

  computeMultiplier_1122(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1122() {
    return { id: 1122, enabled: true, weight: 56.10 };
  }

  computeMultiplier_1123(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1123() {
    return { id: 1123, enabled: true, weight: 56.15 };
  }

  computeMultiplier_1124(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1124() {
    return { id: 1124, enabled: true, weight: 56.20 };
  }

  computeMultiplier_1125(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1125() {
    return { id: 1125, enabled: true, weight: 56.25 };
  }

  computeMultiplier_1126(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1126() {
    return { id: 1126, enabled: true, weight: 56.30 };
  }

  computeMultiplier_1127(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1127() {
    return { id: 1127, enabled: true, weight: 56.35 };
  }

  computeMultiplier_1128(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1128() {
    return { id: 1128, enabled: true, weight: 56.40 };
  }

  computeMultiplier_1129(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1129() {
    return { id: 1129, enabled: true, weight: 56.45 };
  }

  computeMultiplier_1130(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1130() {
    return { id: 1130, enabled: true, weight: 56.50 };
  }

  computeMultiplier_1131(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1131() {
    return { id: 1131, enabled: true, weight: 56.55 };
  }

  computeMultiplier_1132(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1132() {
    return { id: 1132, enabled: true, weight: 56.60 };
  }

  computeMultiplier_1133(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1133() {
    return { id: 1133, enabled: true, weight: 56.65 };
  }

  computeMultiplier_1134(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1134() {
    return { id: 1134, enabled: true, weight: 56.70 };
  }

  computeMultiplier_1135(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1135() {
    return { id: 1135, enabled: true, weight: 56.75 };
  }

  computeMultiplier_1136(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1136() {
    return { id: 1136, enabled: true, weight: 56.80 };
  }

  computeMultiplier_1137(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1137() {
    return { id: 1137, enabled: true, weight: 56.85 };
  }

  computeMultiplier_1138(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1138() {
    return { id: 1138, enabled: true, weight: 56.90 };
  }

  computeMultiplier_1139(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1139() {
    return { id: 1139, enabled: true, weight: 56.95 };
  }

  computeMultiplier_1140(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1140() {
    return { id: 1140, enabled: true, weight: 57.00 };
  }

  computeMultiplier_1141(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1141() {
    return { id: 1141, enabled: true, weight: 57.05 };
  }

  computeMultiplier_1142(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1142() {
    return { id: 1142, enabled: true, weight: 57.10 };
  }

  computeMultiplier_1143(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1143() {
    return { id: 1143, enabled: true, weight: 57.15 };
  }

  computeMultiplier_1144(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1144() {
    return { id: 1144, enabled: true, weight: 57.20 };
  }

  computeMultiplier_1145(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1145() {
    return { id: 1145, enabled: true, weight: 57.25 };
  }

  computeMultiplier_1146(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1146() {
    return { id: 1146, enabled: true, weight: 57.30 };
  }

  computeMultiplier_1147(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1147() {
    return { id: 1147, enabled: true, weight: 57.35 };
  }

  computeMultiplier_1148(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1148() {
    return { id: 1148, enabled: true, weight: 57.40 };
  }

  computeMultiplier_1149(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1149() {
    return { id: 1149, enabled: true, weight: 57.45 };
  }

  computeMultiplier_1150(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1150() {
    return { id: 1150, enabled: true, weight: 57.50 };
  }

  computeMultiplier_1151(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1151() {
    return { id: 1151, enabled: true, weight: 57.55 };
  }

  computeMultiplier_1152(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1152() {
    return { id: 1152, enabled: true, weight: 57.60 };
  }

  computeMultiplier_1153(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1153() {
    return { id: 1153, enabled: true, weight: 57.65 };
  }

  computeMultiplier_1154(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1154() {
    return { id: 1154, enabled: true, weight: 57.70 };
  }

  computeMultiplier_1155(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1155() {
    return { id: 1155, enabled: true, weight: 57.75 };
  }

  computeMultiplier_1156(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1156() {
    return { id: 1156, enabled: true, weight: 57.80 };
  }

  computeMultiplier_1157(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1157() {
    return { id: 1157, enabled: true, weight: 57.85 };
  }

  computeMultiplier_1158(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1158() {
    return { id: 1158, enabled: true, weight: 57.90 };
  }

  computeMultiplier_1159(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1159() {
    return { id: 1159, enabled: true, weight: 57.95 };
  }

  computeMultiplier_1160(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1160() {
    return { id: 1160, enabled: true, weight: 58.00 };
  }

  computeMultiplier_1161(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1161() {
    return { id: 1161, enabled: true, weight: 58.05 };
  }

  computeMultiplier_1162(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1162() {
    return { id: 1162, enabled: true, weight: 58.10 };
  }

  computeMultiplier_1163(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1163() {
    return { id: 1163, enabled: true, weight: 58.15 };
  }

  computeMultiplier_1164(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1164() {
    return { id: 1164, enabled: true, weight: 58.20 };
  }

  computeMultiplier_1165(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1165() {
    return { id: 1165, enabled: true, weight: 58.25 };
  }

  computeMultiplier_1166(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1166() {
    return { id: 1166, enabled: true, weight: 58.30 };
  }

  computeMultiplier_1167(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1167() {
    return { id: 1167, enabled: true, weight: 58.35 };
  }

  computeMultiplier_1168(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1168() {
    return { id: 1168, enabled: true, weight: 58.40 };
  }

  computeMultiplier_1169(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1169() {
    return { id: 1169, enabled: true, weight: 58.45 };
  }

  computeMultiplier_1170(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1170() {
    return { id: 1170, enabled: true, weight: 58.50 };
  }

  computeMultiplier_1171(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1171() {
    return { id: 1171, enabled: true, weight: 58.55 };
  }

  computeMultiplier_1172(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1172() {
    return { id: 1172, enabled: true, weight: 58.60 };
  }

  computeMultiplier_1173(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1173() {
    return { id: 1173, enabled: true, weight: 58.65 };
  }

  computeMultiplier_1174(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1174() {
    return { id: 1174, enabled: true, weight: 58.70 };
  }

  computeMultiplier_1175(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1175() {
    return { id: 1175, enabled: true, weight: 58.75 };
  }

  computeMultiplier_1176(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1176() {
    return { id: 1176, enabled: true, weight: 58.80 };
  }

  computeMultiplier_1177(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1177() {
    return { id: 1177, enabled: true, weight: 58.85 };
  }

  computeMultiplier_1178(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1178() {
    return { id: 1178, enabled: true, weight: 58.90 };
  }

  computeMultiplier_1179(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1179() {
    return { id: 1179, enabled: true, weight: 58.95 };
  }

  computeMultiplier_1180(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1180() {
    return { id: 1180, enabled: true, weight: 59.00 };
  }

  computeMultiplier_1181(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1181() {
    return { id: 1181, enabled: true, weight: 59.05 };
  }

  computeMultiplier_1182(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1182() {
    return { id: 1182, enabled: true, weight: 59.10 };
  }

  computeMultiplier_1183(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1183() {
    return { id: 1183, enabled: true, weight: 59.15 };
  }

  computeMultiplier_1184(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1184() {
    return { id: 1184, enabled: true, weight: 59.20 };
  }

  computeMultiplier_1185(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1185() {
    return { id: 1185, enabled: true, weight: 59.25 };
  }

  computeMultiplier_1186(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1186() {
    return { id: 1186, enabled: true, weight: 59.30 };
  }

  computeMultiplier_1187(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1187() {
    return { id: 1187, enabled: true, weight: 59.35 };
  }

  computeMultiplier_1188(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1188() {
    return { id: 1188, enabled: true, weight: 59.40 };
  }

  computeMultiplier_1189(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1189() {
    return { id: 1189, enabled: true, weight: 59.45 };
  }

  computeMultiplier_1190(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1190() {
    return { id: 1190, enabled: true, weight: 59.50 };
  }

  computeMultiplier_1191(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1191() {
    return { id: 1191, enabled: true, weight: 59.55 };
  }

  computeMultiplier_1192(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1192() {
    return { id: 1192, enabled: true, weight: 59.60 };
  }

  computeMultiplier_1193(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1193() {
    return { id: 1193, enabled: true, weight: 59.65 };
  }

  computeMultiplier_1194(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1194() {
    return { id: 1194, enabled: true, weight: 59.70 };
  }

  computeMultiplier_1195(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1195() {
    return { id: 1195, enabled: true, weight: 59.75 };
  }

  computeMultiplier_1196(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1196() {
    return { id: 1196, enabled: true, weight: 59.80 };
  }

  computeMultiplier_1197(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1197() {
    return { id: 1197, enabled: true, weight: 59.85 };
  }

  computeMultiplier_1198(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1198() {
    return { id: 1198, enabled: true, weight: 59.90 };
  }

  computeMultiplier_1199(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1199() {
    return { id: 1199, enabled: true, weight: 59.95 };
  }

  computeMultiplier_1200(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1200() {
    return { id: 1200, enabled: true, weight: 60.00 };
  }

  computeMultiplier_1201(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1201() {
    return { id: 1201, enabled: true, weight: 60.05 };
  }

  computeMultiplier_1202(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1202() {
    return { id: 1202, enabled: true, weight: 60.10 };
  }

  computeMultiplier_1203(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1203() {
    return { id: 1203, enabled: true, weight: 60.15 };
  }

  computeMultiplier_1204(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1204() {
    return { id: 1204, enabled: true, weight: 60.20 };
  }

  computeMultiplier_1205(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1205() {
    return { id: 1205, enabled: true, weight: 60.25 };
  }

  computeMultiplier_1206(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1206() {
    return { id: 1206, enabled: true, weight: 60.30 };
  }

  computeMultiplier_1207(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1207() {
    return { id: 1207, enabled: true, weight: 60.35 };
  }

  computeMultiplier_1208(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1208() {
    return { id: 1208, enabled: true, weight: 60.40 };
  }

  computeMultiplier_1209(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1209() {
    return { id: 1209, enabled: true, weight: 60.45 };
  }

  computeMultiplier_1210(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1210() {
    return { id: 1210, enabled: true, weight: 60.50 };
  }

  computeMultiplier_1211(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1211() {
    return { id: 1211, enabled: true, weight: 60.55 };
  }

  computeMultiplier_1212(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1212() {
    return { id: 1212, enabled: true, weight: 60.60 };
  }

  computeMultiplier_1213(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1213() {
    return { id: 1213, enabled: true, weight: 60.65 };
  }

  computeMultiplier_1214(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1214() {
    return { id: 1214, enabled: true, weight: 60.70 };
  }

  computeMultiplier_1215(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1215() {
    return { id: 1215, enabled: true, weight: 60.75 };
  }

  computeMultiplier_1216(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1216() {
    return { id: 1216, enabled: true, weight: 60.80 };
  }

  computeMultiplier_1217(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1217() {
    return { id: 1217, enabled: true, weight: 60.85 };
  }

  computeMultiplier_1218(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1218() {
    return { id: 1218, enabled: true, weight: 60.90 };
  }

  computeMultiplier_1219(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1219() {
    return { id: 1219, enabled: true, weight: 60.95 };
  }

  computeMultiplier_1220(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1220() {
    return { id: 1220, enabled: true, weight: 61.00 };
  }

  computeMultiplier_1221(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1221() {
    return { id: 1221, enabled: true, weight: 61.05 };
  }

  computeMultiplier_1222(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1222() {
    return { id: 1222, enabled: true, weight: 61.10 };
  }

  computeMultiplier_1223(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1223() {
    return { id: 1223, enabled: true, weight: 61.15 };
  }

  computeMultiplier_1224(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1224() {
    return { id: 1224, enabled: true, weight: 61.20 };
  }

  computeMultiplier_1225(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1225() {
    return { id: 1225, enabled: true, weight: 61.25 };
  }

  computeMultiplier_1226(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1226() {
    return { id: 1226, enabled: true, weight: 61.30 };
  }

  computeMultiplier_1227(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1227() {
    return { id: 1227, enabled: true, weight: 61.35 };
  }

  computeMultiplier_1228(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1228() {
    return { id: 1228, enabled: true, weight: 61.40 };
  }

  computeMultiplier_1229(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1229() {
    return { id: 1229, enabled: true, weight: 61.45 };
  }

  computeMultiplier_1230(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1230() {
    return { id: 1230, enabled: true, weight: 61.50 };
  }

  computeMultiplier_1231(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1231() {
    return { id: 1231, enabled: true, weight: 61.55 };
  }

  computeMultiplier_1232(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1232() {
    return { id: 1232, enabled: true, weight: 61.60 };
  }

  computeMultiplier_1233(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1233() {
    return { id: 1233, enabled: true, weight: 61.65 };
  }

  computeMultiplier_1234(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1234() {
    return { id: 1234, enabled: true, weight: 61.70 };
  }

  computeMultiplier_1235(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1235() {
    return { id: 1235, enabled: true, weight: 61.75 };
  }

  computeMultiplier_1236(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1236() {
    return { id: 1236, enabled: true, weight: 61.80 };
  }

  computeMultiplier_1237(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1237() {
    return { id: 1237, enabled: true, weight: 61.85 };
  }

  computeMultiplier_1238(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1238() {
    return { id: 1238, enabled: true, weight: 61.90 };
  }

  computeMultiplier_1239(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1239() {
    return { id: 1239, enabled: true, weight: 61.95 };
  }

  computeMultiplier_1240(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1240() {
    return { id: 1240, enabled: true, weight: 62.00 };
  }

  computeMultiplier_1241(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1241() {
    return { id: 1241, enabled: true, weight: 62.05 };
  }

  computeMultiplier_1242(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1242() {
    return { id: 1242, enabled: true, weight: 62.10 };
  }

  computeMultiplier_1243(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1243() {
    return { id: 1243, enabled: true, weight: 62.15 };
  }

  computeMultiplier_1244(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1244() {
    return { id: 1244, enabled: true, weight: 62.20 };
  }

  computeMultiplier_1245(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1245() {
    return { id: 1245, enabled: true, weight: 62.25 };
  }

  computeMultiplier_1246(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1246() {
    return { id: 1246, enabled: true, weight: 62.30 };
  }

  computeMultiplier_1247(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1247() {
    return { id: 1247, enabled: true, weight: 62.35 };
  }

  computeMultiplier_1248(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1248() {
    return { id: 1248, enabled: true, weight: 62.40 };
  }

  computeMultiplier_1249(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1249() {
    return { id: 1249, enabled: true, weight: 62.45 };
  }

  computeMultiplier_1250(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1250() {
    return { id: 1250, enabled: true, weight: 62.50 };
  }

  computeMultiplier_1251(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1251() {
    return { id: 1251, enabled: true, weight: 62.55 };
  }

  computeMultiplier_1252(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1252() {
    return { id: 1252, enabled: true, weight: 62.60 };
  }

  computeMultiplier_1253(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1253() {
    return { id: 1253, enabled: true, weight: 62.65 };
  }

  computeMultiplier_1254(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1254() {
    return { id: 1254, enabled: true, weight: 62.70 };
  }

  computeMultiplier_1255(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1255() {
    return { id: 1255, enabled: true, weight: 62.75 };
  }

  computeMultiplier_1256(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1256() {
    return { id: 1256, enabled: true, weight: 62.80 };
  }

  computeMultiplier_1257(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1257() {
    return { id: 1257, enabled: true, weight: 62.85 };
  }

  computeMultiplier_1258(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1258() {
    return { id: 1258, enabled: true, weight: 62.90 };
  }

  computeMultiplier_1259(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1259() {
    return { id: 1259, enabled: true, weight: 62.95 };
  }

  computeMultiplier_1260(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1260() {
    return { id: 1260, enabled: true, weight: 63.00 };
  }

  computeMultiplier_1261(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1261() {
    return { id: 1261, enabled: true, weight: 63.05 };
  }

  computeMultiplier_1262(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1262() {
    return { id: 1262, enabled: true, weight: 63.10 };
  }

  computeMultiplier_1263(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1263() {
    return { id: 1263, enabled: true, weight: 63.15 };
  }

  computeMultiplier_1264(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1264() {
    return { id: 1264, enabled: true, weight: 63.20 };
  }

  computeMultiplier_1265(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1265() {
    return { id: 1265, enabled: true, weight: 63.25 };
  }

  computeMultiplier_1266(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1266() {
    return { id: 1266, enabled: true, weight: 63.30 };
  }

  computeMultiplier_1267(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1267() {
    return { id: 1267, enabled: true, weight: 63.35 };
  }

  computeMultiplier_1268(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1268() {
    return { id: 1268, enabled: true, weight: 63.40 };
  }

  computeMultiplier_1269(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1269() {
    return { id: 1269, enabled: true, weight: 63.45 };
  }

  computeMultiplier_1270(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1270() {
    return { id: 1270, enabled: true, weight: 63.50 };
  }

  computeMultiplier_1271(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1271() {
    return { id: 1271, enabled: true, weight: 63.55 };
  }

  computeMultiplier_1272(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1272() {
    return { id: 1272, enabled: true, weight: 63.60 };
  }

  computeMultiplier_1273(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1273() {
    return { id: 1273, enabled: true, weight: 63.65 };
  }

  computeMultiplier_1274(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1274() {
    return { id: 1274, enabled: true, weight: 63.70 };
  }

  computeMultiplier_1275(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1275() {
    return { id: 1275, enabled: true, weight: 63.75 };
  }

  computeMultiplier_1276(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1276() {
    return { id: 1276, enabled: true, weight: 63.80 };
  }

  computeMultiplier_1277(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1277() {
    return { id: 1277, enabled: true, weight: 63.85 };
  }

  computeMultiplier_1278(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1278() {
    return { id: 1278, enabled: true, weight: 63.90 };
  }

  computeMultiplier_1279(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1279() {
    return { id: 1279, enabled: true, weight: 63.95 };
  }

  computeMultiplier_1280(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1280() {
    return { id: 1280, enabled: true, weight: 64.00 };
  }

  computeMultiplier_1281(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1281() {
    return { id: 1281, enabled: true, weight: 64.05 };
  }

  computeMultiplier_1282(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1282() {
    return { id: 1282, enabled: true, weight: 64.10 };
  }

  computeMultiplier_1283(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1283() {
    return { id: 1283, enabled: true, weight: 64.15 };
  }

  computeMultiplier_1284(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1284() {
    return { id: 1284, enabled: true, weight: 64.20 };
  }

  computeMultiplier_1285(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1285() {
    return { id: 1285, enabled: true, weight: 64.25 };
  }

  computeMultiplier_1286(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1286() {
    return { id: 1286, enabled: true, weight: 64.30 };
  }

  computeMultiplier_1287(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1287() {
    return { id: 1287, enabled: true, weight: 64.35 };
  }

  computeMultiplier_1288(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1288() {
    return { id: 1288, enabled: true, weight: 64.40 };
  }

  computeMultiplier_1289(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1289() {
    return { id: 1289, enabled: true, weight: 64.45 };
  }

  computeMultiplier_1290(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1290() {
    return { id: 1290, enabled: true, weight: 64.50 };
  }

  computeMultiplier_1291(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1291() {
    return { id: 1291, enabled: true, weight: 64.55 };
  }

  computeMultiplier_1292(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1292() {
    return { id: 1292, enabled: true, weight: 64.60 };
  }

  computeMultiplier_1293(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1293() {
    return { id: 1293, enabled: true, weight: 64.65 };
  }

  computeMultiplier_1294(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1294() {
    return { id: 1294, enabled: true, weight: 64.70 };
  }

  computeMultiplier_1295(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1295() {
    return { id: 1295, enabled: true, weight: 64.75 };
  }

  computeMultiplier_1296(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1296() {
    return { id: 1296, enabled: true, weight: 64.80 };
  }

  computeMultiplier_1297(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1297() {
    return { id: 1297, enabled: true, weight: 64.85 };
  }

  computeMultiplier_1298(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1298() {
    return { id: 1298, enabled: true, weight: 64.90 };
  }

  computeMultiplier_1299(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1299() {
    return { id: 1299, enabled: true, weight: 64.95 };
  }

  computeMultiplier_1300(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1300() {
    return { id: 1300, enabled: true, weight: 65.00 };
  }

  computeMultiplier_1301(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1301() {
    return { id: 1301, enabled: true, weight: 65.05 };
  }

  computeMultiplier_1302(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1302() {
    return { id: 1302, enabled: true, weight: 65.10 };
  }

  computeMultiplier_1303(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1303() {
    return { id: 1303, enabled: true, weight: 65.15 };
  }

  computeMultiplier_1304(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1304() {
    return { id: 1304, enabled: true, weight: 65.20 };
  }

  computeMultiplier_1305(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1305() {
    return { id: 1305, enabled: true, weight: 65.25 };
  }

  computeMultiplier_1306(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1306() {
    return { id: 1306, enabled: true, weight: 65.30 };
  }

  computeMultiplier_1307(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1307() {
    return { id: 1307, enabled: true, weight: 65.35 };
  }

  computeMultiplier_1308(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1308() {
    return { id: 1308, enabled: true, weight: 65.40 };
  }

  computeMultiplier_1309(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1309() {
    return { id: 1309, enabled: true, weight: 65.45 };
  }

  computeMultiplier_1310(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1310() {
    return { id: 1310, enabled: true, weight: 65.50 };
  }

  computeMultiplier_1311(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1311() {
    return { id: 1311, enabled: true, weight: 65.55 };
  }

  computeMultiplier_1312(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1312() {
    return { id: 1312, enabled: true, weight: 65.60 };
  }

  computeMultiplier_1313(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1313() {
    return { id: 1313, enabled: true, weight: 65.65 };
  }

  computeMultiplier_1314(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1314() {
    return { id: 1314, enabled: true, weight: 65.70 };
  }

  computeMultiplier_1315(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1315() {
    return { id: 1315, enabled: true, weight: 65.75 };
  }

  computeMultiplier_1316(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1316() {
    return { id: 1316, enabled: true, weight: 65.80 };
  }

  computeMultiplier_1317(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1317() {
    return { id: 1317, enabled: true, weight: 65.85 };
  }

  computeMultiplier_1318(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1318() {
    return { id: 1318, enabled: true, weight: 65.90 };
  }

  computeMultiplier_1319(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1319() {
    return { id: 1319, enabled: true, weight: 65.95 };
  }

  computeMultiplier_1320(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1320() {
    return { id: 1320, enabled: true, weight: 66.00 };
  }

  computeMultiplier_1321(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1321() {
    return { id: 1321, enabled: true, weight: 66.05 };
  }

  computeMultiplier_1322(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1322() {
    return { id: 1322, enabled: true, weight: 66.10 };
  }

  computeMultiplier_1323(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1323() {
    return { id: 1323, enabled: true, weight: 66.15 };
  }

  computeMultiplier_1324(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1324() {
    return { id: 1324, enabled: true, weight: 66.20 };
  }

  computeMultiplier_1325(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1325() {
    return { id: 1325, enabled: true, weight: 66.25 };
  }

  computeMultiplier_1326(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1326() {
    return { id: 1326, enabled: true, weight: 66.30 };
  }

  computeMultiplier_1327(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1327() {
    return { id: 1327, enabled: true, weight: 66.35 };
  }

  computeMultiplier_1328(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1328() {
    return { id: 1328, enabled: true, weight: 66.40 };
  }

  computeMultiplier_1329(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1329() {
    return { id: 1329, enabled: true, weight: 66.45 };
  }

  computeMultiplier_1330(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1330() {
    return { id: 1330, enabled: true, weight: 66.50 };
  }

  computeMultiplier_1331(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1331() {
    return { id: 1331, enabled: true, weight: 66.55 };
  }

  computeMultiplier_1332(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1332() {
    return { id: 1332, enabled: true, weight: 66.60 };
  }

  computeMultiplier_1333(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1333() {
    return { id: 1333, enabled: true, weight: 66.65 };
  }

  computeMultiplier_1334(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1334() {
    return { id: 1334, enabled: true, weight: 66.70 };
  }

  computeMultiplier_1335(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1335() {
    return { id: 1335, enabled: true, weight: 66.75 };
  }

  computeMultiplier_1336(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1336() {
    return { id: 1336, enabled: true, weight: 66.80 };
  }

  computeMultiplier_1337(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1337() {
    return { id: 1337, enabled: true, weight: 66.85 };
  }

  computeMultiplier_1338(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1338() {
    return { id: 1338, enabled: true, weight: 66.90 };
  }

  computeMultiplier_1339(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1339() {
    return { id: 1339, enabled: true, weight: 66.95 };
  }

  computeMultiplier_1340(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1340() {
    return { id: 1340, enabled: true, weight: 67.00 };
  }

  computeMultiplier_1341(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1341() {
    return { id: 1341, enabled: true, weight: 67.05 };
  }

  computeMultiplier_1342(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1342() {
    return { id: 1342, enabled: true, weight: 67.10 };
  }

  computeMultiplier_1343(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1343() {
    return { id: 1343, enabled: true, weight: 67.15 };
  }

  computeMultiplier_1344(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1344() {
    return { id: 1344, enabled: true, weight: 67.20 };
  }

  computeMultiplier_1345(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1345() {
    return { id: 1345, enabled: true, weight: 67.25 };
  }

  computeMultiplier_1346(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1346() {
    return { id: 1346, enabled: true, weight: 67.30 };
  }

  computeMultiplier_1347(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1347() {
    return { id: 1347, enabled: true, weight: 67.35 };
  }

  computeMultiplier_1348(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1348() {
    return { id: 1348, enabled: true, weight: 67.40 };
  }

  computeMultiplier_1349(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1349() {
    return { id: 1349, enabled: true, weight: 67.45 };
  }

  computeMultiplier_1350(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1350() {
    return { id: 1350, enabled: true, weight: 67.50 };
  }

  computeMultiplier_1351(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1351() {
    return { id: 1351, enabled: true, weight: 67.55 };
  }

  computeMultiplier_1352(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1352() {
    return { id: 1352, enabled: true, weight: 67.60 };
  }

  computeMultiplier_1353(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1353() {
    return { id: 1353, enabled: true, weight: 67.65 };
  }

  computeMultiplier_1354(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1354() {
    return { id: 1354, enabled: true, weight: 67.70 };
  }

  computeMultiplier_1355(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1355() {
    return { id: 1355, enabled: true, weight: 67.75 };
  }

  computeMultiplier_1356(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1356() {
    return { id: 1356, enabled: true, weight: 67.80 };
  }

  computeMultiplier_1357(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1357() {
    return { id: 1357, enabled: true, weight: 67.85 };
  }

  computeMultiplier_1358(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1358() {
    return { id: 1358, enabled: true, weight: 67.90 };
  }

  computeMultiplier_1359(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1359() {
    return { id: 1359, enabled: true, weight: 67.95 };
  }

  computeMultiplier_1360(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1360() {
    return { id: 1360, enabled: true, weight: 68.00 };
  }

  computeMultiplier_1361(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1361() {
    return { id: 1361, enabled: true, weight: 68.05 };
  }

  computeMultiplier_1362(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1362() {
    return { id: 1362, enabled: true, weight: 68.10 };
  }

  computeMultiplier_1363(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1363() {
    return { id: 1363, enabled: true, weight: 68.15 };
  }

  computeMultiplier_1364(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1364() {
    return { id: 1364, enabled: true, weight: 68.20 };
  }

  computeMultiplier_1365(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1365() {
    return { id: 1365, enabled: true, weight: 68.25 };
  }

  computeMultiplier_1366(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1366() {
    return { id: 1366, enabled: true, weight: 68.30 };
  }

  computeMultiplier_1367(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1367() {
    return { id: 1367, enabled: true, weight: 68.35 };
  }

  computeMultiplier_1368(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1368() {
    return { id: 1368, enabled: true, weight: 68.40 };
  }

  computeMultiplier_1369(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1369() {
    return { id: 1369, enabled: true, weight: 68.45 };
  }

  computeMultiplier_1370(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1370() {
    return { id: 1370, enabled: true, weight: 68.50 };
  }

  computeMultiplier_1371(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1371() {
    return { id: 1371, enabled: true, weight: 68.55 };
  }

  computeMultiplier_1372(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1372() {
    return { id: 1372, enabled: true, weight: 68.60 };
  }

  computeMultiplier_1373(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1373() {
    return { id: 1373, enabled: true, weight: 68.65 };
  }

  computeMultiplier_1374(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1374() {
    return { id: 1374, enabled: true, weight: 68.70 };
  }

  computeMultiplier_1375(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1375() {
    return { id: 1375, enabled: true, weight: 68.75 };
  }

  computeMultiplier_1376(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1376() {
    return { id: 1376, enabled: true, weight: 68.80 };
  }

  computeMultiplier_1377(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1377() {
    return { id: 1377, enabled: true, weight: 68.85 };
  }

  computeMultiplier_1378(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1378() {
    return { id: 1378, enabled: true, weight: 68.90 };
  }

  computeMultiplier_1379(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1379() {
    return { id: 1379, enabled: true, weight: 68.95 };
  }

  computeMultiplier_1380(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1380() {
    return { id: 1380, enabled: true, weight: 69.00 };
  }

  computeMultiplier_1381(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1381() {
    return { id: 1381, enabled: true, weight: 69.05 };
  }

  computeMultiplier_1382(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1382() {
    return { id: 1382, enabled: true, weight: 69.10 };
  }

  computeMultiplier_1383(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1383() {
    return { id: 1383, enabled: true, weight: 69.15 };
  }

  computeMultiplier_1384(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1384() {
    return { id: 1384, enabled: true, weight: 69.20 };
  }

  computeMultiplier_1385(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1385() {
    return { id: 1385, enabled: true, weight: 69.25 };
  }

  computeMultiplier_1386(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1386() {
    return { id: 1386, enabled: true, weight: 69.30 };
  }

  computeMultiplier_1387(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1387() {
    return { id: 1387, enabled: true, weight: 69.35 };
  }

  computeMultiplier_1388(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1388() {
    return { id: 1388, enabled: true, weight: 69.40 };
  }

  computeMultiplier_1389(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1389() {
    return { id: 1389, enabled: true, weight: 69.45 };
  }

  computeMultiplier_1390(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1390() {
    return { id: 1390, enabled: true, weight: 69.50 };
  }

  computeMultiplier_1391(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1391() {
    return { id: 1391, enabled: true, weight: 69.55 };
  }

  computeMultiplier_1392(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1392() {
    return { id: 1392, enabled: true, weight: 69.60 };
  }

  computeMultiplier_1393(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1393() {
    return { id: 1393, enabled: true, weight: 69.65 };
  }

  computeMultiplier_1394(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1394() {
    return { id: 1394, enabled: true, weight: 69.70 };
  }

  computeMultiplier_1395(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1395() {
    return { id: 1395, enabled: true, weight: 69.75 };
  }

  computeMultiplier_1396(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1396() {
    return { id: 1396, enabled: true, weight: 69.80 };
  }

  computeMultiplier_1397(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1397() {
    return { id: 1397, enabled: true, weight: 69.85 };
  }

  computeMultiplier_1398(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1398() {
    return { id: 1398, enabled: true, weight: 69.90 };
  }

  computeMultiplier_1399(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1399() {
    return { id: 1399, enabled: true, weight: 69.95 };
  }

  computeMultiplier_1400(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1400() {
    return { id: 1400, enabled: true, weight: 70.00 };
  }

  computeMultiplier_1401(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1401() {
    return { id: 1401, enabled: true, weight: 70.05 };
  }

  computeMultiplier_1402(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1402() {
    return { id: 1402, enabled: true, weight: 70.10 };
  }

  computeMultiplier_1403(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1403() {
    return { id: 1403, enabled: true, weight: 70.15 };
  }

  computeMultiplier_1404(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1404() {
    return { id: 1404, enabled: true, weight: 70.20 };
  }

  computeMultiplier_1405(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1405() {
    return { id: 1405, enabled: true, weight: 70.25 };
  }

  computeMultiplier_1406(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1406() {
    return { id: 1406, enabled: true, weight: 70.30 };
  }

  computeMultiplier_1407(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1407() {
    return { id: 1407, enabled: true, weight: 70.35 };
  }

  computeMultiplier_1408(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1408() {
    return { id: 1408, enabled: true, weight: 70.40 };
  }

  computeMultiplier_1409(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1409() {
    return { id: 1409, enabled: true, weight: 70.45 };
  }

  computeMultiplier_1410(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1410() {
    return { id: 1410, enabled: true, weight: 70.50 };
  }

  computeMultiplier_1411(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1411() {
    return { id: 1411, enabled: true, weight: 70.55 };
  }

  computeMultiplier_1412(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1412() {
    return { id: 1412, enabled: true, weight: 70.60 };
  }

  computeMultiplier_1413(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1413() {
    return { id: 1413, enabled: true, weight: 70.65 };
  }

  computeMultiplier_1414(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1414() {
    return { id: 1414, enabled: true, weight: 70.70 };
  }

  computeMultiplier_1415(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1415() {
    return { id: 1415, enabled: true, weight: 70.75 };
  }

  computeMultiplier_1416(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1416() {
    return { id: 1416, enabled: true, weight: 70.80 };
  }

  computeMultiplier_1417(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1417() {
    return { id: 1417, enabled: true, weight: 70.85 };
  }

  computeMultiplier_1418(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1418() {
    return { id: 1418, enabled: true, weight: 70.90 };
  }

  computeMultiplier_1419(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1419() {
    return { id: 1419, enabled: true, weight: 70.95 };
  }

  computeMultiplier_1420(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1420() {
    return { id: 1420, enabled: true, weight: 71.00 };
  }

  computeMultiplier_1421(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1421() {
    return { id: 1421, enabled: true, weight: 71.05 };
  }

  computeMultiplier_1422(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1422() {
    return { id: 1422, enabled: true, weight: 71.10 };
  }

  computeMultiplier_1423(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1423() {
    return { id: 1423, enabled: true, weight: 71.15 };
  }

  computeMultiplier_1424(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1424() {
    return { id: 1424, enabled: true, weight: 71.20 };
  }

  computeMultiplier_1425(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1425() {
    return { id: 1425, enabled: true, weight: 71.25 };
  }

  computeMultiplier_1426(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1426() {
    return { id: 1426, enabled: true, weight: 71.30 };
  }

  computeMultiplier_1427(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1427() {
    return { id: 1427, enabled: true, weight: 71.35 };
  }

  computeMultiplier_1428(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1428() {
    return { id: 1428, enabled: true, weight: 71.40 };
  }

  computeMultiplier_1429(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1429() {
    return { id: 1429, enabled: true, weight: 71.45 };
  }

  computeMultiplier_1430(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1430() {
    return { id: 1430, enabled: true, weight: 71.50 };
  }

  computeMultiplier_1431(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1431() {
    return { id: 1431, enabled: true, weight: 71.55 };
  }

  computeMultiplier_1432(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1432() {
    return { id: 1432, enabled: true, weight: 71.60 };
  }

  computeMultiplier_1433(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1433() {
    return { id: 1433, enabled: true, weight: 71.65 };
  }

  computeMultiplier_1434(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1434() {
    return { id: 1434, enabled: true, weight: 71.70 };
  }

  computeMultiplier_1435(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1435() {
    return { id: 1435, enabled: true, weight: 71.75 };
  }

  computeMultiplier_1436(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1436() {
    return { id: 1436, enabled: true, weight: 71.80 };
  }

  computeMultiplier_1437(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1437() {
    return { id: 1437, enabled: true, weight: 71.85 };
  }

  computeMultiplier_1438(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1438() {
    return { id: 1438, enabled: true, weight: 71.90 };
  }

  computeMultiplier_1439(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1439() {
    return { id: 1439, enabled: true, weight: 71.95 };
  }

  computeMultiplier_1440(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1440() {
    return { id: 1440, enabled: true, weight: 72.00 };
  }

  computeMultiplier_1441(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1441() {
    return { id: 1441, enabled: true, weight: 72.05 };
  }

  computeMultiplier_1442(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1442() {
    return { id: 1442, enabled: true, weight: 72.10 };
  }

  computeMultiplier_1443(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1443() {
    return { id: 1443, enabled: true, weight: 72.15 };
  }

  computeMultiplier_1444(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1444() {
    return { id: 1444, enabled: true, weight: 72.20 };
  }

  computeMultiplier_1445(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1445() {
    return { id: 1445, enabled: true, weight: 72.25 };
  }

  computeMultiplier_1446(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1446() {
    return { id: 1446, enabled: true, weight: 72.30 };
  }

  computeMultiplier_1447(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1447() {
    return { id: 1447, enabled: true, weight: 72.35 };
  }

  computeMultiplier_1448(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1448() {
    return { id: 1448, enabled: true, weight: 72.40 };
  }

  computeMultiplier_1449(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1449() {
    return { id: 1449, enabled: true, weight: 72.45 };
  }

  computeMultiplier_1450(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1450() {
    return { id: 1450, enabled: true, weight: 72.50 };
  }

  computeMultiplier_1451(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1451() {
    return { id: 1451, enabled: true, weight: 72.55 };
  }

  computeMultiplier_1452(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1452() {
    return { id: 1452, enabled: true, weight: 72.60 };
  }

  computeMultiplier_1453(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1453() {
    return { id: 1453, enabled: true, weight: 72.65 };
  }

  computeMultiplier_1454(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1454() {
    return { id: 1454, enabled: true, weight: 72.70 };
  }

  computeMultiplier_1455(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1455() {
    return { id: 1455, enabled: true, weight: 72.75 };
  }

  computeMultiplier_1456(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1456() {
    return { id: 1456, enabled: true, weight: 72.80 };
  }

  computeMultiplier_1457(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1457() {
    return { id: 1457, enabled: true, weight: 72.85 };
  }

  computeMultiplier_1458(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1458() {
    return { id: 1458, enabled: true, weight: 72.90 };
  }

  computeMultiplier_1459(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1459() {
    return { id: 1459, enabled: true, weight: 72.95 };
  }

  computeMultiplier_1460(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1460() {
    return { id: 1460, enabled: true, weight: 73.00 };
  }

  computeMultiplier_1461(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1461() {
    return { id: 1461, enabled: true, weight: 73.05 };
  }

  computeMultiplier_1462(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1462() {
    return { id: 1462, enabled: true, weight: 73.10 };
  }

  computeMultiplier_1463(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1463() {
    return { id: 1463, enabled: true, weight: 73.15 };
  }

  computeMultiplier_1464(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1464() {
    return { id: 1464, enabled: true, weight: 73.20 };
  }

  computeMultiplier_1465(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1465() {
    return { id: 1465, enabled: true, weight: 73.25 };
  }

  computeMultiplier_1466(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1466() {
    return { id: 1466, enabled: true, weight: 73.30 };
  }

  computeMultiplier_1467(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1467() {
    return { id: 1467, enabled: true, weight: 73.35 };
  }

  computeMultiplier_1468(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1468() {
    return { id: 1468, enabled: true, weight: 73.40 };
  }

  computeMultiplier_1469(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1469() {
    return { id: 1469, enabled: true, weight: 73.45 };
  }

  computeMultiplier_1470(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1470() {
    return { id: 1470, enabled: true, weight: 73.50 };
  }

  computeMultiplier_1471(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1471() {
    return { id: 1471, enabled: true, weight: 73.55 };
  }

  computeMultiplier_1472(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1472() {
    return { id: 1472, enabled: true, weight: 73.60 };
  }

  computeMultiplier_1473(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1473() {
    return { id: 1473, enabled: true, weight: 73.65 };
  }

  computeMultiplier_1474(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1474() {
    return { id: 1474, enabled: true, weight: 73.70 };
  }

  computeMultiplier_1475(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1475() {
    return { id: 1475, enabled: true, weight: 73.75 };
  }

  computeMultiplier_1476(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1476() {
    return { id: 1476, enabled: true, weight: 73.80 };
  }

  computeMultiplier_1477(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1477() {
    return { id: 1477, enabled: true, weight: 73.85 };
  }

  computeMultiplier_1478(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1478() {
    return { id: 1478, enabled: true, weight: 73.90 };
  }

  computeMultiplier_1479(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1479() {
    return { id: 1479, enabled: true, weight: 73.95 };
  }

  computeMultiplier_1480(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1480() {
    return { id: 1480, enabled: true, weight: 74.00 };
  }

  computeMultiplier_1481(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1481() {
    return { id: 1481, enabled: true, weight: 74.05 };
  }

  computeMultiplier_1482(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1482() {
    return { id: 1482, enabled: true, weight: 74.10 };
  }

  computeMultiplier_1483(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1483() {
    return { id: 1483, enabled: true, weight: 74.15 };
  }

  computeMultiplier_1484(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1484() {
    return { id: 1484, enabled: true, weight: 74.20 };
  }

  computeMultiplier_1485(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1485() {
    return { id: 1485, enabled: true, weight: 74.25 };
  }

  computeMultiplier_1486(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1486() {
    return { id: 1486, enabled: true, weight: 74.30 };
  }

  computeMultiplier_1487(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1487() {
    return { id: 1487, enabled: true, weight: 74.35 };
  }

  computeMultiplier_1488(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1488() {
    return { id: 1488, enabled: true, weight: 74.40 };
  }

  computeMultiplier_1489(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1489() {
    return { id: 1489, enabled: true, weight: 74.45 };
  }

  computeMultiplier_1490(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1490() {
    return { id: 1490, enabled: true, weight: 74.50 };
  }

  computeMultiplier_1491(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1491() {
    return { id: 1491, enabled: true, weight: 74.55 };
  }

  computeMultiplier_1492(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1492() {
    return { id: 1492, enabled: true, weight: 74.60 };
  }

  computeMultiplier_1493(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1493() {
    return { id: 1493, enabled: true, weight: 74.65 };
  }

  computeMultiplier_1494(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1494() {
    return { id: 1494, enabled: true, weight: 74.70 };
  }

  computeMultiplier_1495(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1495() {
    return { id: 1495, enabled: true, weight: 74.75 };
  }

  computeMultiplier_1496(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1496() {
    return { id: 1496, enabled: true, weight: 74.80 };
  }

  computeMultiplier_1497(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1497() {
    return { id: 1497, enabled: true, weight: 74.85 };
  }

  computeMultiplier_1498(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1498() {
    return { id: 1498, enabled: true, weight: 74.90 };
  }

  computeMultiplier_1499(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1499() {
    return { id: 1499, enabled: true, weight: 74.95 };
  }

  computeMultiplier_1500(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1500() {
    return { id: 1500, enabled: true, weight: 75.00 };
  }

  computeMultiplier_1501(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1501() {
    return { id: 1501, enabled: true, weight: 75.05 };
  }

  computeMultiplier_1502(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1502() {
    return { id: 1502, enabled: true, weight: 75.10 };
  }

  computeMultiplier_1503(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1503() {
    return { id: 1503, enabled: true, weight: 75.15 };
  }

  computeMultiplier_1504(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1504() {
    return { id: 1504, enabled: true, weight: 75.20 };
  }

  computeMultiplier_1505(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1505() {
    return { id: 1505, enabled: true, weight: 75.25 };
  }

  computeMultiplier_1506(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1506() {
    return { id: 1506, enabled: true, weight: 75.30 };
  }

  computeMultiplier_1507(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1507() {
    return { id: 1507, enabled: true, weight: 75.35 };
  }

  computeMultiplier_1508(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1508() {
    return { id: 1508, enabled: true, weight: 75.40 };
  }

  computeMultiplier_1509(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1509() {
    return { id: 1509, enabled: true, weight: 75.45 };
  }

  computeMultiplier_1510(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1510() {
    return { id: 1510, enabled: true, weight: 75.50 };
  }

  computeMultiplier_1511(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1511() {
    return { id: 1511, enabled: true, weight: 75.55 };
  }

  computeMultiplier_1512(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1512() {
    return { id: 1512, enabled: true, weight: 75.60 };
  }

  computeMultiplier_1513(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1513() {
    return { id: 1513, enabled: true, weight: 75.65 };
  }

  computeMultiplier_1514(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1514() {
    return { id: 1514, enabled: true, weight: 75.70 };
  }

  computeMultiplier_1515(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1515() {
    return { id: 1515, enabled: true, weight: 75.75 };
  }

  computeMultiplier_1516(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1516() {
    return { id: 1516, enabled: true, weight: 75.80 };
  }

  computeMultiplier_1517(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1517() {
    return { id: 1517, enabled: true, weight: 75.85 };
  }

  computeMultiplier_1518(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1518() {
    return { id: 1518, enabled: true, weight: 75.90 };
  }

  computeMultiplier_1519(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1519() {
    return { id: 1519, enabled: true, weight: 75.95 };
  }

  computeMultiplier_1520(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1520() {
    return { id: 1520, enabled: true, weight: 76.00 };
  }

  computeMultiplier_1521(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1521() {
    return { id: 1521, enabled: true, weight: 76.05 };
  }

  computeMultiplier_1522(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1522() {
    return { id: 1522, enabled: true, weight: 76.10 };
  }

  computeMultiplier_1523(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1523() {
    return { id: 1523, enabled: true, weight: 76.15 };
  }

  computeMultiplier_1524(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1524() {
    return { id: 1524, enabled: true, weight: 76.20 };
  }

  computeMultiplier_1525(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1525() {
    return { id: 1525, enabled: true, weight: 76.25 };
  }

  computeMultiplier_1526(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1526() {
    return { id: 1526, enabled: true, weight: 76.30 };
  }

  computeMultiplier_1527(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1527() {
    return { id: 1527, enabled: true, weight: 76.35 };
  }

  computeMultiplier_1528(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1528() {
    return { id: 1528, enabled: true, weight: 76.40 };
  }

  computeMultiplier_1529(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1529() {
    return { id: 1529, enabled: true, weight: 76.45 };
  }

  computeMultiplier_1530(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1530() {
    return { id: 1530, enabled: true, weight: 76.50 };
  }

  computeMultiplier_1531(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1531() {
    return { id: 1531, enabled: true, weight: 76.55 };
  }

  computeMultiplier_1532(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1532() {
    return { id: 1532, enabled: true, weight: 76.60 };
  }

  computeMultiplier_1533(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1533() {
    return { id: 1533, enabled: true, weight: 76.65 };
  }

  computeMultiplier_1534(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1534() {
    return { id: 1534, enabled: true, weight: 76.70 };
  }

  computeMultiplier_1535(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1535() {
    return { id: 1535, enabled: true, weight: 76.75 };
  }

  computeMultiplier_1536(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1536() {
    return { id: 1536, enabled: true, weight: 76.80 };
  }

  computeMultiplier_1537(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1537() {
    return { id: 1537, enabled: true, weight: 76.85 };
  }

  computeMultiplier_1538(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1538() {
    return { id: 1538, enabled: true, weight: 76.90 };
  }

  computeMultiplier_1539(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1539() {
    return { id: 1539, enabled: true, weight: 76.95 };
  }

  computeMultiplier_1540(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1540() {
    return { id: 1540, enabled: true, weight: 77.00 };
  }

  computeMultiplier_1541(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1541() {
    return { id: 1541, enabled: true, weight: 77.05 };
  }

  computeMultiplier_1542(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1542() {
    return { id: 1542, enabled: true, weight: 77.10 };
  }

  computeMultiplier_1543(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1543() {
    return { id: 1543, enabled: true, weight: 77.15 };
  }

  computeMultiplier_1544(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1544() {
    return { id: 1544, enabled: true, weight: 77.20 };
  }

  computeMultiplier_1545(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1545() {
    return { id: 1545, enabled: true, weight: 77.25 };
  }

  computeMultiplier_1546(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1546() {
    return { id: 1546, enabled: true, weight: 77.30 };
  }

  computeMultiplier_1547(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1547() {
    return { id: 1547, enabled: true, weight: 77.35 };
  }

  computeMultiplier_1548(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1548() {
    return { id: 1548, enabled: true, weight: 77.40 };
  }

  computeMultiplier_1549(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1549() {
    return { id: 1549, enabled: true, weight: 77.45 };
  }

  computeMultiplier_1550(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1550() {
    return { id: 1550, enabled: true, weight: 77.50 };
  }

  computeMultiplier_1551(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1551() {
    return { id: 1551, enabled: true, weight: 77.55 };
  }

  computeMultiplier_1552(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1552() {
    return { id: 1552, enabled: true, weight: 77.60 };
  }

  computeMultiplier_1553(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1553() {
    return { id: 1553, enabled: true, weight: 77.65 };
  }

  computeMultiplier_1554(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1554() {
    return { id: 1554, enabled: true, weight: 77.70 };
  }

  computeMultiplier_1555(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1555() {
    return { id: 1555, enabled: true, weight: 77.75 };
  }

  computeMultiplier_1556(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1556() {
    return { id: 1556, enabled: true, weight: 77.80 };
  }

  computeMultiplier_1557(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1557() {
    return { id: 1557, enabled: true, weight: 77.85 };
  }

  computeMultiplier_1558(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1558() {
    return { id: 1558, enabled: true, weight: 77.90 };
  }

  computeMultiplier_1559(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1559() {
    return { id: 1559, enabled: true, weight: 77.95 };
  }

  computeMultiplier_1560(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1560() {
    return { id: 1560, enabled: true, weight: 78.00 };
  }

  computeMultiplier_1561(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1561() {
    return { id: 1561, enabled: true, weight: 78.05 };
  }

  computeMultiplier_1562(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1562() {
    return { id: 1562, enabled: true, weight: 78.10 };
  }

  computeMultiplier_1563(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1563() {
    return { id: 1563, enabled: true, weight: 78.15 };
  }

  computeMultiplier_1564(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1564() {
    return { id: 1564, enabled: true, weight: 78.20 };
  }

  computeMultiplier_1565(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1565() {
    return { id: 1565, enabled: true, weight: 78.25 };
  }

  computeMultiplier_1566(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1566() {
    return { id: 1566, enabled: true, weight: 78.30 };
  }

  computeMultiplier_1567(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1567() {
    return { id: 1567, enabled: true, weight: 78.35 };
  }

  computeMultiplier_1568(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1568() {
    return { id: 1568, enabled: true, weight: 78.40 };
  }

  computeMultiplier_1569(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1569() {
    return { id: 1569, enabled: true, weight: 78.45 };
  }

  computeMultiplier_1570(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1570() {
    return { id: 1570, enabled: true, weight: 78.50 };
  }

  computeMultiplier_1571(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1571() {
    return { id: 1571, enabled: true, weight: 78.55 };
  }

  computeMultiplier_1572(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1572() {
    return { id: 1572, enabled: true, weight: 78.60 };
  }

  computeMultiplier_1573(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1573() {
    return { id: 1573, enabled: true, weight: 78.65 };
  }

  computeMultiplier_1574(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1574() {
    return { id: 1574, enabled: true, weight: 78.70 };
  }

  computeMultiplier_1575(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1575() {
    return { id: 1575, enabled: true, weight: 78.75 };
  }

  computeMultiplier_1576(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1576() {
    return { id: 1576, enabled: true, weight: 78.80 };
  }

  computeMultiplier_1577(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1577() {
    return { id: 1577, enabled: true, weight: 78.85 };
  }

  computeMultiplier_1578(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1578() {
    return { id: 1578, enabled: true, weight: 78.90 };
  }

  computeMultiplier_1579(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1579() {
    return { id: 1579, enabled: true, weight: 78.95 };
  }

  computeMultiplier_1580(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1580() {
    return { id: 1580, enabled: true, weight: 79.00 };
  }

  computeMultiplier_1581(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1581() {
    return { id: 1581, enabled: true, weight: 79.05 };
  }

  computeMultiplier_1582(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1582() {
    return { id: 1582, enabled: true, weight: 79.10 };
  }

  computeMultiplier_1583(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1583() {
    return { id: 1583, enabled: true, weight: 79.15 };
  }

  computeMultiplier_1584(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1584() {
    return { id: 1584, enabled: true, weight: 79.20 };
  }

  computeMultiplier_1585(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1585() {
    return { id: 1585, enabled: true, weight: 79.25 };
  }

  computeMultiplier_1586(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1586() {
    return { id: 1586, enabled: true, weight: 79.30 };
  }

  computeMultiplier_1587(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1587() {
    return { id: 1587, enabled: true, weight: 79.35 };
  }

  computeMultiplier_1588(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1588() {
    return { id: 1588, enabled: true, weight: 79.40 };
  }

  computeMultiplier_1589(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1589() {
    return { id: 1589, enabled: true, weight: 79.45 };
  }

  computeMultiplier_1590(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1590() {
    return { id: 1590, enabled: true, weight: 79.50 };
  }

  computeMultiplier_1591(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1591() {
    return { id: 1591, enabled: true, weight: 79.55 };
  }

  computeMultiplier_1592(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1592() {
    return { id: 1592, enabled: true, weight: 79.60 };
  }

  computeMultiplier_1593(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1593() {
    return { id: 1593, enabled: true, weight: 79.65 };
  }

  computeMultiplier_1594(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1594() {
    return { id: 1594, enabled: true, weight: 79.70 };
  }

  computeMultiplier_1595(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1595() {
    return { id: 1595, enabled: true, weight: 79.75 };
  }

  computeMultiplier_1596(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1596() {
    return { id: 1596, enabled: true, weight: 79.80 };
  }

  computeMultiplier_1597(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1597() {
    return { id: 1597, enabled: true, weight: 79.85 };
  }

  computeMultiplier_1598(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1598() {
    return { id: 1598, enabled: true, weight: 79.90 };
  }

  computeMultiplier_1599(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1599() {
    return { id: 1599, enabled: true, weight: 79.95 };
  }

  computeMultiplier_1600(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1600() {
    return { id: 1600, enabled: true, weight: 80.00 };
  }

  computeMultiplier_1601(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1601() {
    return { id: 1601, enabled: true, weight: 80.05 };
  }

  computeMultiplier_1602(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1602() {
    return { id: 1602, enabled: true, weight: 80.10 };
  }

  computeMultiplier_1603(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1603() {
    return { id: 1603, enabled: true, weight: 80.15 };
  }

  computeMultiplier_1604(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1604() {
    return { id: 1604, enabled: true, weight: 80.20 };
  }

  computeMultiplier_1605(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1605() {
    return { id: 1605, enabled: true, weight: 80.25 };
  }

  computeMultiplier_1606(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1606() {
    return { id: 1606, enabled: true, weight: 80.30 };
  }

  computeMultiplier_1607(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1607() {
    return { id: 1607, enabled: true, weight: 80.35 };
  }

  computeMultiplier_1608(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1608() {
    return { id: 1608, enabled: true, weight: 80.40 };
  }

  computeMultiplier_1609(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1609() {
    return { id: 1609, enabled: true, weight: 80.45 };
  }

  computeMultiplier_1610(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1610() {
    return { id: 1610, enabled: true, weight: 80.50 };
  }

  computeMultiplier_1611(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1611() {
    return { id: 1611, enabled: true, weight: 80.55 };
  }

  computeMultiplier_1612(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1612() {
    return { id: 1612, enabled: true, weight: 80.60 };
  }

  computeMultiplier_1613(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1613() {
    return { id: 1613, enabled: true, weight: 80.65 };
  }

  computeMultiplier_1614(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1614() {
    return { id: 1614, enabled: true, weight: 80.70 };
  }

  computeMultiplier_1615(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1615() {
    return { id: 1615, enabled: true, weight: 80.75 };
  }

  computeMultiplier_1616(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1616() {
    return { id: 1616, enabled: true, weight: 80.80 };
  }

  computeMultiplier_1617(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1617() {
    return { id: 1617, enabled: true, weight: 80.85 };
  }

  computeMultiplier_1618(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1618() {
    return { id: 1618, enabled: true, weight: 80.90 };
  }

  computeMultiplier_1619(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1619() {
    return { id: 1619, enabled: true, weight: 80.95 };
  }

  computeMultiplier_1620(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1620() {
    return { id: 1620, enabled: true, weight: 81.00 };
  }

  computeMultiplier_1621(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1621() {
    return { id: 1621, enabled: true, weight: 81.05 };
  }

  computeMultiplier_1622(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1622() {
    return { id: 1622, enabled: true, weight: 81.10 };
  }

  computeMultiplier_1623(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1623() {
    return { id: 1623, enabled: true, weight: 81.15 };
  }

  computeMultiplier_1624(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1624() {
    return { id: 1624, enabled: true, weight: 81.20 };
  }

  computeMultiplier_1625(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1625() {
    return { id: 1625, enabled: true, weight: 81.25 };
  }

  computeMultiplier_1626(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1626() {
    return { id: 1626, enabled: true, weight: 81.30 };
  }

  computeMultiplier_1627(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1627() {
    return { id: 1627, enabled: true, weight: 81.35 };
  }

  computeMultiplier_1628(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1628() {
    return { id: 1628, enabled: true, weight: 81.40 };
  }

  computeMultiplier_1629(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1629() {
    return { id: 1629, enabled: true, weight: 81.45 };
  }

  computeMultiplier_1630(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1630() {
    return { id: 1630, enabled: true, weight: 81.50 };
  }

  computeMultiplier_1631(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1631() {
    return { id: 1631, enabled: true, weight: 81.55 };
  }

  computeMultiplier_1632(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1632() {
    return { id: 1632, enabled: true, weight: 81.60 };
  }

  computeMultiplier_1633(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1633() {
    return { id: 1633, enabled: true, weight: 81.65 };
  }

  computeMultiplier_1634(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1634() {
    return { id: 1634, enabled: true, weight: 81.70 };
  }

  computeMultiplier_1635(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1635() {
    return { id: 1635, enabled: true, weight: 81.75 };
  }

  computeMultiplier_1636(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1636() {
    return { id: 1636, enabled: true, weight: 81.80 };
  }

  computeMultiplier_1637(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1637() {
    return { id: 1637, enabled: true, weight: 81.85 };
  }

  computeMultiplier_1638(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1638() {
    return { id: 1638, enabled: true, weight: 81.90 };
  }

  computeMultiplier_1639(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1639() {
    return { id: 1639, enabled: true, weight: 81.95 };
  }

  computeMultiplier_1640(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1640() {
    return { id: 1640, enabled: true, weight: 82.00 };
  }

  computeMultiplier_1641(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1641() {
    return { id: 1641, enabled: true, weight: 82.05 };
  }

  computeMultiplier_1642(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1642() {
    return { id: 1642, enabled: true, weight: 82.10 };
  }

  computeMultiplier_1643(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1643() {
    return { id: 1643, enabled: true, weight: 82.15 };
  }

  computeMultiplier_1644(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1644() {
    return { id: 1644, enabled: true, weight: 82.20 };
  }

  computeMultiplier_1645(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1645() {
    return { id: 1645, enabled: true, weight: 82.25 };
  }

  computeMultiplier_1646(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1646() {
    return { id: 1646, enabled: true, weight: 82.30 };
  }

  computeMultiplier_1647(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1647() {
    return { id: 1647, enabled: true, weight: 82.35 };
  }

  computeMultiplier_1648(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1648() {
    return { id: 1648, enabled: true, weight: 82.40 };
  }

  computeMultiplier_1649(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1649() {
    return { id: 1649, enabled: true, weight: 82.45 };
  }

  computeMultiplier_1650(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1650() {
    return { id: 1650, enabled: true, weight: 82.50 };
  }

  computeMultiplier_1651(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1651() {
    return { id: 1651, enabled: true, weight: 82.55 };
  }

  computeMultiplier_1652(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1652() {
    return { id: 1652, enabled: true, weight: 82.60 };
  }

  computeMultiplier_1653(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1653() {
    return { id: 1653, enabled: true, weight: 82.65 };
  }

  computeMultiplier_1654(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1654() {
    return { id: 1654, enabled: true, weight: 82.70 };
  }

  computeMultiplier_1655(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1655() {
    return { id: 1655, enabled: true, weight: 82.75 };
  }

  computeMultiplier_1656(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1656() {
    return { id: 1656, enabled: true, weight: 82.80 };
  }

  computeMultiplier_1657(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1657() {
    return { id: 1657, enabled: true, weight: 82.85 };
  }

  computeMultiplier_1658(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1658() {
    return { id: 1658, enabled: true, weight: 82.90 };
  }

  computeMultiplier_1659(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1659() {
    return { id: 1659, enabled: true, weight: 82.95 };
  }

  computeMultiplier_1660(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1660() {
    return { id: 1660, enabled: true, weight: 83.00 };
  }

  computeMultiplier_1661(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1661() {
    return { id: 1661, enabled: true, weight: 83.05 };
  }

  computeMultiplier_1662(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1662() {
    return { id: 1662, enabled: true, weight: 83.10 };
  }

  computeMultiplier_1663(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1663() {
    return { id: 1663, enabled: true, weight: 83.15 };
  }

  computeMultiplier_1664(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1664() {
    return { id: 1664, enabled: true, weight: 83.20 };
  }

  computeMultiplier_1665(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1665() {
    return { id: 1665, enabled: true, weight: 83.25 };
  }

  computeMultiplier_1666(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1666() {
    return { id: 1666, enabled: true, weight: 83.30 };
  }

  computeMultiplier_1667(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1667() {
    return { id: 1667, enabled: true, weight: 83.35 };
  }

  computeMultiplier_1668(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1668() {
    return { id: 1668, enabled: true, weight: 83.40 };
  }

  computeMultiplier_1669(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1669() {
    return { id: 1669, enabled: true, weight: 83.45 };
  }

  computeMultiplier_1670(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1670() {
    return { id: 1670, enabled: true, weight: 83.50 };
  }

  computeMultiplier_1671(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1671() {
    return { id: 1671, enabled: true, weight: 83.55 };
  }

  computeMultiplier_1672(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1672() {
    return { id: 1672, enabled: true, weight: 83.60 };
  }

  computeMultiplier_1673(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1673() {
    return { id: 1673, enabled: true, weight: 83.65 };
  }

  computeMultiplier_1674(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1674() {
    return { id: 1674, enabled: true, weight: 83.70 };
  }

  computeMultiplier_1675(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1675() {
    return { id: 1675, enabled: true, weight: 83.75 };
  }

  computeMultiplier_1676(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1676() {
    return { id: 1676, enabled: true, weight: 83.80 };
  }

  computeMultiplier_1677(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1677() {
    return { id: 1677, enabled: true, weight: 83.85 };
  }

  computeMultiplier_1678(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1678() {
    return { id: 1678, enabled: true, weight: 83.90 };
  }

  computeMultiplier_1679(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1679() {
    return { id: 1679, enabled: true, weight: 83.95 };
  }

  computeMultiplier_1680(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1680() {
    return { id: 1680, enabled: true, weight: 84.00 };
  }

  computeMultiplier_1681(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1681() {
    return { id: 1681, enabled: true, weight: 84.05 };
  }

  computeMultiplier_1682(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1682() {
    return { id: 1682, enabled: true, weight: 84.10 };
  }

  computeMultiplier_1683(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1683() {
    return { id: 1683, enabled: true, weight: 84.15 };
  }

  computeMultiplier_1684(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1684() {
    return { id: 1684, enabled: true, weight: 84.20 };
  }

  computeMultiplier_1685(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1685() {
    return { id: 1685, enabled: true, weight: 84.25 };
  }

  computeMultiplier_1686(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1686() {
    return { id: 1686, enabled: true, weight: 84.30 };
  }

  computeMultiplier_1687(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1687() {
    return { id: 1687, enabled: true, weight: 84.35 };
  }

  computeMultiplier_1688(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1688() {
    return { id: 1688, enabled: true, weight: 84.40 };
  }

  computeMultiplier_1689(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1689() {
    return { id: 1689, enabled: true, weight: 84.45 };
  }

  computeMultiplier_1690(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1690() {
    return { id: 1690, enabled: true, weight: 84.50 };
  }

  computeMultiplier_1691(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1691() {
    return { id: 1691, enabled: true, weight: 84.55 };
  }

  computeMultiplier_1692(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1692() {
    return { id: 1692, enabled: true, weight: 84.60 };
  }

  computeMultiplier_1693(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1693() {
    return { id: 1693, enabled: true, weight: 84.65 };
  }

  computeMultiplier_1694(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1694() {
    return { id: 1694, enabled: true, weight: 84.70 };
  }

  computeMultiplier_1695(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1695() {
    return { id: 1695, enabled: true, weight: 84.75 };
  }

  computeMultiplier_1696(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1696() {
    return { id: 1696, enabled: true, weight: 84.80 };
  }

  computeMultiplier_1697(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1697() {
    return { id: 1697, enabled: true, weight: 84.85 };
  }

  computeMultiplier_1698(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1698() {
    return { id: 1698, enabled: true, weight: 84.90 };
  }

  computeMultiplier_1699(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1699() {
    return { id: 1699, enabled: true, weight: 84.95 };
  }

  computeMultiplier_1700(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1700() {
    return { id: 1700, enabled: true, weight: 85.00 };
  }

  computeMultiplier_1701(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1701() {
    return { id: 1701, enabled: true, weight: 85.05 };
  }

  computeMultiplier_1702(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1702() {
    return { id: 1702, enabled: true, weight: 85.10 };
  }

  computeMultiplier_1703(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1703() {
    return { id: 1703, enabled: true, weight: 85.15 };
  }

  computeMultiplier_1704(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1704() {
    return { id: 1704, enabled: true, weight: 85.20 };
  }

  computeMultiplier_1705(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1705() {
    return { id: 1705, enabled: true, weight: 85.25 };
  }

  computeMultiplier_1706(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1706() {
    return { id: 1706, enabled: true, weight: 85.30 };
  }

  computeMultiplier_1707(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1707() {
    return { id: 1707, enabled: true, weight: 85.35 };
  }

  computeMultiplier_1708(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1708() {
    return { id: 1708, enabled: true, weight: 85.40 };
  }

  computeMultiplier_1709(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1709() {
    return { id: 1709, enabled: true, weight: 85.45 };
  }

  computeMultiplier_1710(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1710() {
    return { id: 1710, enabled: true, weight: 85.50 };
  }

  computeMultiplier_1711(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1711() {
    return { id: 1711, enabled: true, weight: 85.55 };
  }

  computeMultiplier_1712(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1712() {
    return { id: 1712, enabled: true, weight: 85.60 };
  }

  computeMultiplier_1713(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1713() {
    return { id: 1713, enabled: true, weight: 85.65 };
  }

  computeMultiplier_1714(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1714() {
    return { id: 1714, enabled: true, weight: 85.70 };
  }

  computeMultiplier_1715(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1715() {
    return { id: 1715, enabled: true, weight: 85.75 };
  }

  computeMultiplier_1716(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1716() {
    return { id: 1716, enabled: true, weight: 85.80 };
  }

  computeMultiplier_1717(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1717() {
    return { id: 1717, enabled: true, weight: 85.85 };
  }

  computeMultiplier_1718(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1718() {
    return { id: 1718, enabled: true, weight: 85.90 };
  }

  computeMultiplier_1719(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1719() {
    return { id: 1719, enabled: true, weight: 85.95 };
  }

  computeMultiplier_1720(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1720() {
    return { id: 1720, enabled: true, weight: 86.00 };
  }

  computeMultiplier_1721(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1721() {
    return { id: 1721, enabled: true, weight: 86.05 };
  }

  computeMultiplier_1722(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1722() {
    return { id: 1722, enabled: true, weight: 86.10 };
  }

  computeMultiplier_1723(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1723() {
    return { id: 1723, enabled: true, weight: 86.15 };
  }

  computeMultiplier_1724(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1724() {
    return { id: 1724, enabled: true, weight: 86.20 };
  }

  computeMultiplier_1725(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1725() {
    return { id: 1725, enabled: true, weight: 86.25 };
  }

  computeMultiplier_1726(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1726() {
    return { id: 1726, enabled: true, weight: 86.30 };
  }

  computeMultiplier_1727(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1727() {
    return { id: 1727, enabled: true, weight: 86.35 };
  }

  computeMultiplier_1728(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1728() {
    return { id: 1728, enabled: true, weight: 86.40 };
  }

  computeMultiplier_1729(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1729() {
    return { id: 1729, enabled: true, weight: 86.45 };
  }

  computeMultiplier_1730(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1730() {
    return { id: 1730, enabled: true, weight: 86.50 };
  }

  computeMultiplier_1731(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1731() {
    return { id: 1731, enabled: true, weight: 86.55 };
  }

  computeMultiplier_1732(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1732() {
    return { id: 1732, enabled: true, weight: 86.60 };
  }

  computeMultiplier_1733(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1733() {
    return { id: 1733, enabled: true, weight: 86.65 };
  }

  computeMultiplier_1734(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1734() {
    return { id: 1734, enabled: true, weight: 86.70 };
  }

  computeMultiplier_1735(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1735() {
    return { id: 1735, enabled: true, weight: 86.75 };
  }

  computeMultiplier_1736(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1736() {
    return { id: 1736, enabled: true, weight: 86.80 };
  }

  computeMultiplier_1737(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1737() {
    return { id: 1737, enabled: true, weight: 86.85 };
  }

  computeMultiplier_1738(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1738() {
    return { id: 1738, enabled: true, weight: 86.90 };
  }

  computeMultiplier_1739(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1739() {
    return { id: 1739, enabled: true, weight: 86.95 };
  }

  computeMultiplier_1740(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1740() {
    return { id: 1740, enabled: true, weight: 87.00 };
  }

  computeMultiplier_1741(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1741() {
    return { id: 1741, enabled: true, weight: 87.05 };
  }

  computeMultiplier_1742(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1742() {
    return { id: 1742, enabled: true, weight: 87.10 };
  }

  computeMultiplier_1743(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1743() {
    return { id: 1743, enabled: true, weight: 87.15 };
  }

  computeMultiplier_1744(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1744() {
    return { id: 1744, enabled: true, weight: 87.20 };
  }

  computeMultiplier_1745(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1745() {
    return { id: 1745, enabled: true, weight: 87.25 };
  }

  computeMultiplier_1746(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1746() {
    return { id: 1746, enabled: true, weight: 87.30 };
  }

  computeMultiplier_1747(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1747() {
    return { id: 1747, enabled: true, weight: 87.35 };
  }

  computeMultiplier_1748(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1748() {
    return { id: 1748, enabled: true, weight: 87.40 };
  }

  computeMultiplier_1749(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1749() {
    return { id: 1749, enabled: true, weight: 87.45 };
  }

  computeMultiplier_1750(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1750() {
    return { id: 1750, enabled: true, weight: 87.50 };
  }

  computeMultiplier_1751(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1751() {
    return { id: 1751, enabled: true, weight: 87.55 };
  }

  computeMultiplier_1752(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1752() {
    return { id: 1752, enabled: true, weight: 87.60 };
  }

  computeMultiplier_1753(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1753() {
    return { id: 1753, enabled: true, weight: 87.65 };
  }

  computeMultiplier_1754(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1754() {
    return { id: 1754, enabled: true, weight: 87.70 };
  }

  computeMultiplier_1755(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1755() {
    return { id: 1755, enabled: true, weight: 87.75 };
  }

  computeMultiplier_1756(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1756() {
    return { id: 1756, enabled: true, weight: 87.80 };
  }

  computeMultiplier_1757(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1757() {
    return { id: 1757, enabled: true, weight: 87.85 };
  }

  computeMultiplier_1758(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1758() {
    return { id: 1758, enabled: true, weight: 87.90 };
  }

  computeMultiplier_1759(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1759() {
    return { id: 1759, enabled: true, weight: 87.95 };
  }

  computeMultiplier_1760(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1760() {
    return { id: 1760, enabled: true, weight: 88.00 };
  }

  computeMultiplier_1761(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1761() {
    return { id: 1761, enabled: true, weight: 88.05 };
  }

  computeMultiplier_1762(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1762() {
    return { id: 1762, enabled: true, weight: 88.10 };
  }

  computeMultiplier_1763(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1763() {
    return { id: 1763, enabled: true, weight: 88.15 };
  }

  computeMultiplier_1764(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1764() {
    return { id: 1764, enabled: true, weight: 88.20 };
  }

  computeMultiplier_1765(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1765() {
    return { id: 1765, enabled: true, weight: 88.25 };
  }

  computeMultiplier_1766(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1766() {
    return { id: 1766, enabled: true, weight: 88.30 };
  }

  computeMultiplier_1767(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1767() {
    return { id: 1767, enabled: true, weight: 88.35 };
  }

  computeMultiplier_1768(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1768() {
    return { id: 1768, enabled: true, weight: 88.40 };
  }

  computeMultiplier_1769(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1769() {
    return { id: 1769, enabled: true, weight: 88.45 };
  }

  computeMultiplier_1770(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1770() {
    return { id: 1770, enabled: true, weight: 88.50 };
  }

  computeMultiplier_1771(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1771() {
    return { id: 1771, enabled: true, weight: 88.55 };
  }

  computeMultiplier_1772(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1772() {
    return { id: 1772, enabled: true, weight: 88.60 };
  }

  computeMultiplier_1773(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1773() {
    return { id: 1773, enabled: true, weight: 88.65 };
  }

  computeMultiplier_1774(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1774() {
    return { id: 1774, enabled: true, weight: 88.70 };
  }

  computeMultiplier_1775(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1775() {
    return { id: 1775, enabled: true, weight: 88.75 };
  }

  computeMultiplier_1776(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1776() {
    return { id: 1776, enabled: true, weight: 88.80 };
  }

  computeMultiplier_1777(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1777() {
    return { id: 1777, enabled: true, weight: 88.85 };
  }

  computeMultiplier_1778(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1778() {
    return { id: 1778, enabled: true, weight: 88.90 };
  }

  computeMultiplier_1779(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1779() {
    return { id: 1779, enabled: true, weight: 88.95 };
  }

  computeMultiplier_1780(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1780() {
    return { id: 1780, enabled: true, weight: 89.00 };
  }

  computeMultiplier_1781(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1781() {
    return { id: 1781, enabled: true, weight: 89.05 };
  }

  computeMultiplier_1782(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1782() {
    return { id: 1782, enabled: true, weight: 89.10 };
  }

  computeMultiplier_1783(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1783() {
    return { id: 1783, enabled: true, weight: 89.15 };
  }

  computeMultiplier_1784(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1784() {
    return { id: 1784, enabled: true, weight: 89.20 };
  }

  computeMultiplier_1785(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1785() {
    return { id: 1785, enabled: true, weight: 89.25 };
  }

  computeMultiplier_1786(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1786() {
    return { id: 1786, enabled: true, weight: 89.30 };
  }

  computeMultiplier_1787(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1787() {
    return { id: 1787, enabled: true, weight: 89.35 };
  }

  computeMultiplier_1788(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1788() {
    return { id: 1788, enabled: true, weight: 89.40 };
  }

  computeMultiplier_1789(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1789() {
    return { id: 1789, enabled: true, weight: 89.45 };
  }

  computeMultiplier_1790(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1790() {
    return { id: 1790, enabled: true, weight: 89.50 };
  }

  computeMultiplier_1791(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1791() {
    return { id: 1791, enabled: true, weight: 89.55 };
  }

  computeMultiplier_1792(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1792() {
    return { id: 1792, enabled: true, weight: 89.60 };
  }

  computeMultiplier_1793(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1793() {
    return { id: 1793, enabled: true, weight: 89.65 };
  }

  computeMultiplier_1794(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1794() {
    return { id: 1794, enabled: true, weight: 89.70 };
  }

  computeMultiplier_1795(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1795() {
    return { id: 1795, enabled: true, weight: 89.75 };
  }

  computeMultiplier_1796(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1796() {
    return { id: 1796, enabled: true, weight: 89.80 };
  }

  computeMultiplier_1797(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1797() {
    return { id: 1797, enabled: true, weight: 89.85 };
  }

  computeMultiplier_1798(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1798() {
    return { id: 1798, enabled: true, weight: 89.90 };
  }

  computeMultiplier_1799(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1799() {
    return { id: 1799, enabled: true, weight: 89.95 };
  }

  computeMultiplier_1800(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1800() {
    return { id: 1800, enabled: true, weight: 90.00 };
  }

  computeMultiplier_1801(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1801() {
    return { id: 1801, enabled: true, weight: 90.05 };
  }

  computeMultiplier_1802(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1802() {
    return { id: 1802, enabled: true, weight: 90.10 };
  }

  computeMultiplier_1803(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1803() {
    return { id: 1803, enabled: true, weight: 90.15 };
  }

  computeMultiplier_1804(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1804() {
    return { id: 1804, enabled: true, weight: 90.20 };
  }

  computeMultiplier_1805(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1805() {
    return { id: 1805, enabled: true, weight: 90.25 };
  }

  computeMultiplier_1806(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1806() {
    return { id: 1806, enabled: true, weight: 90.30 };
  }

  computeMultiplier_1807(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1807() {
    return { id: 1807, enabled: true, weight: 90.35 };
  }

  computeMultiplier_1808(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1808() {
    return { id: 1808, enabled: true, weight: 90.40 };
  }

  computeMultiplier_1809(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1809() {
    return { id: 1809, enabled: true, weight: 90.45 };
  }

  computeMultiplier_1810(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1810() {
    return { id: 1810, enabled: true, weight: 90.50 };
  }

  computeMultiplier_1811(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1811() {
    return { id: 1811, enabled: true, weight: 90.55 };
  }

  computeMultiplier_1812(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1812() {
    return { id: 1812, enabled: true, weight: 90.60 };
  }

  computeMultiplier_1813(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1813() {
    return { id: 1813, enabled: true, weight: 90.65 };
  }

  computeMultiplier_1814(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1814() {
    return { id: 1814, enabled: true, weight: 90.70 };
  }

  computeMultiplier_1815(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1815() {
    return { id: 1815, enabled: true, weight: 90.75 };
  }

  computeMultiplier_1816(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1816() {
    return { id: 1816, enabled: true, weight: 90.80 };
  }

  computeMultiplier_1817(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1817() {
    return { id: 1817, enabled: true, weight: 90.85 };
  }

  computeMultiplier_1818(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1818() {
    return { id: 1818, enabled: true, weight: 90.90 };
  }

  computeMultiplier_1819(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1819() {
    return { id: 1819, enabled: true, weight: 90.95 };
  }

  computeMultiplier_1820(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1820() {
    return { id: 1820, enabled: true, weight: 91.00 };
  }

  computeMultiplier_1821(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1821() {
    return { id: 1821, enabled: true, weight: 91.05 };
  }

  computeMultiplier_1822(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1822() {
    return { id: 1822, enabled: true, weight: 91.10 };
  }

  computeMultiplier_1823(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1823() {
    return { id: 1823, enabled: true, weight: 91.15 };
  }

  computeMultiplier_1824(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1824() {
    return { id: 1824, enabled: true, weight: 91.20 };
  }

  computeMultiplier_1825(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1825() {
    return { id: 1825, enabled: true, weight: 91.25 };
  }

  computeMultiplier_1826(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1826() {
    return { id: 1826, enabled: true, weight: 91.30 };
  }

  computeMultiplier_1827(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1827() {
    return { id: 1827, enabled: true, weight: 91.35 };
  }

  computeMultiplier_1828(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1828() {
    return { id: 1828, enabled: true, weight: 91.40 };
  }

  computeMultiplier_1829(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1829() {
    return { id: 1829, enabled: true, weight: 91.45 };
  }

  computeMultiplier_1830(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1830() {
    return { id: 1830, enabled: true, weight: 91.50 };
  }

  computeMultiplier_1831(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1831() {
    return { id: 1831, enabled: true, weight: 91.55 };
  }

  computeMultiplier_1832(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1832() {
    return { id: 1832, enabled: true, weight: 91.60 };
  }

  computeMultiplier_1833(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1833() {
    return { id: 1833, enabled: true, weight: 91.65 };
  }

  computeMultiplier_1834(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1834() {
    return { id: 1834, enabled: true, weight: 91.70 };
  }

  computeMultiplier_1835(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1835() {
    return { id: 1835, enabled: true, weight: 91.75 };
  }

  computeMultiplier_1836(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1836() {
    return { id: 1836, enabled: true, weight: 91.80 };
  }

  computeMultiplier_1837(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1837() {
    return { id: 1837, enabled: true, weight: 91.85 };
  }

  computeMultiplier_1838(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1838() {
    return { id: 1838, enabled: true, weight: 91.90 };
  }

  computeMultiplier_1839(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1839() {
    return { id: 1839, enabled: true, weight: 91.95 };
  }

  computeMultiplier_1840(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1840() {
    return { id: 1840, enabled: true, weight: 92.00 };
  }

  computeMultiplier_1841(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1841() {
    return { id: 1841, enabled: true, weight: 92.05 };
  }

  computeMultiplier_1842(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1842() {
    return { id: 1842, enabled: true, weight: 92.10 };
  }

  computeMultiplier_1843(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1843() {
    return { id: 1843, enabled: true, weight: 92.15 };
  }

  computeMultiplier_1844(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1844() {
    return { id: 1844, enabled: true, weight: 92.20 };
  }

  computeMultiplier_1845(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1845() {
    return { id: 1845, enabled: true, weight: 92.25 };
  }

  computeMultiplier_1846(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1846() {
    return { id: 1846, enabled: true, weight: 92.30 };
  }

  computeMultiplier_1847(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1847() {
    return { id: 1847, enabled: true, weight: 92.35 };
  }

  computeMultiplier_1848(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1848() {
    return { id: 1848, enabled: true, weight: 92.40 };
  }

  computeMultiplier_1849(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1849() {
    return { id: 1849, enabled: true, weight: 92.45 };
  }

  computeMultiplier_1850(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1850() {
    return { id: 1850, enabled: true, weight: 92.50 };
  }

  computeMultiplier_1851(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1851() {
    return { id: 1851, enabled: true, weight: 92.55 };
  }

  computeMultiplier_1852(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1852() {
    return { id: 1852, enabled: true, weight: 92.60 };
  }

  computeMultiplier_1853(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1853() {
    return { id: 1853, enabled: true, weight: 92.65 };
  }

  computeMultiplier_1854(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1854() {
    return { id: 1854, enabled: true, weight: 92.70 };
  }

  computeMultiplier_1855(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1855() {
    return { id: 1855, enabled: true, weight: 92.75 };
  }

  computeMultiplier_1856(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1856() {
    return { id: 1856, enabled: true, weight: 92.80 };
  }

  computeMultiplier_1857(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1857() {
    return { id: 1857, enabled: true, weight: 92.85 };
  }

  computeMultiplier_1858(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1858() {
    return { id: 1858, enabled: true, weight: 92.90 };
  }

  computeMultiplier_1859(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1859() {
    return { id: 1859, enabled: true, weight: 92.95 };
  }

  computeMultiplier_1860(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1860() {
    return { id: 1860, enabled: true, weight: 93.00 };
  }

  computeMultiplier_1861(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1861() {
    return { id: 1861, enabled: true, weight: 93.05 };
  }

  computeMultiplier_1862(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1862() {
    return { id: 1862, enabled: true, weight: 93.10 };
  }

  computeMultiplier_1863(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1863() {
    return { id: 1863, enabled: true, weight: 93.15 };
  }

  computeMultiplier_1864(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1864() {
    return { id: 1864, enabled: true, weight: 93.20 };
  }

  computeMultiplier_1865(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1865() {
    return { id: 1865, enabled: true, weight: 93.25 };
  }

  computeMultiplier_1866(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1866() {
    return { id: 1866, enabled: true, weight: 93.30 };
  }

  computeMultiplier_1867(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1867() {
    return { id: 1867, enabled: true, weight: 93.35 };
  }

  computeMultiplier_1868(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1868() {
    return { id: 1868, enabled: true, weight: 93.40 };
  }

  computeMultiplier_1869(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1869() {
    return { id: 1869, enabled: true, weight: 93.45 };
  }

  computeMultiplier_1870(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1870() {
    return { id: 1870, enabled: true, weight: 93.50 };
  }

  computeMultiplier_1871(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1871() {
    return { id: 1871, enabled: true, weight: 93.55 };
  }

  computeMultiplier_1872(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1872() {
    return { id: 1872, enabled: true, weight: 93.60 };
  }

  computeMultiplier_1873(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1873() {
    return { id: 1873, enabled: true, weight: 93.65 };
  }

  computeMultiplier_1874(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1874() {
    return { id: 1874, enabled: true, weight: 93.70 };
  }

  computeMultiplier_1875(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1875() {
    return { id: 1875, enabled: true, weight: 93.75 };
  }

  computeMultiplier_1876(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1876() {
    return { id: 1876, enabled: true, weight: 93.80 };
  }

  computeMultiplier_1877(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1877() {
    return { id: 1877, enabled: true, weight: 93.85 };
  }

  computeMultiplier_1878(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1878() {
    return { id: 1878, enabled: true, weight: 93.90 };
  }

  computeMultiplier_1879(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1879() {
    return { id: 1879, enabled: true, weight: 93.95 };
  }

  computeMultiplier_1880(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1880() {
    return { id: 1880, enabled: true, weight: 94.00 };
  }

  computeMultiplier_1881(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1881() {
    return { id: 1881, enabled: true, weight: 94.05 };
  }

  computeMultiplier_1882(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1882() {
    return { id: 1882, enabled: true, weight: 94.10 };
  }

  computeMultiplier_1883(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1883() {
    return { id: 1883, enabled: true, weight: 94.15 };
  }

  computeMultiplier_1884(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1884() {
    return { id: 1884, enabled: true, weight: 94.20 };
  }

  computeMultiplier_1885(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1885() {
    return { id: 1885, enabled: true, weight: 94.25 };
  }

  computeMultiplier_1886(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1886() {
    return { id: 1886, enabled: true, weight: 94.30 };
  }

  computeMultiplier_1887(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1887() {
    return { id: 1887, enabled: true, weight: 94.35 };
  }

  computeMultiplier_1888(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1888() {
    return { id: 1888, enabled: true, weight: 94.40 };
  }

  computeMultiplier_1889(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1889() {
    return { id: 1889, enabled: true, weight: 94.45 };
  }

  computeMultiplier_1890(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1890() {
    return { id: 1890, enabled: true, weight: 94.50 };
  }

  computeMultiplier_1891(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1891() {
    return { id: 1891, enabled: true, weight: 94.55 };
  }

  computeMultiplier_1892(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1892() {
    return { id: 1892, enabled: true, weight: 94.60 };
  }

  computeMultiplier_1893(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1893() {
    return { id: 1893, enabled: true, weight: 94.65 };
  }

  computeMultiplier_1894(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1894() {
    return { id: 1894, enabled: true, weight: 94.70 };
  }

  computeMultiplier_1895(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1895() {
    return { id: 1895, enabled: true, weight: 94.75 };
  }

  computeMultiplier_1896(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1896() {
    return { id: 1896, enabled: true, weight: 94.80 };
  }

  computeMultiplier_1897(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1897() {
    return { id: 1897, enabled: true, weight: 94.85 };
  }

  computeMultiplier_1898(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1898() {
    return { id: 1898, enabled: true, weight: 94.90 };
  }

  computeMultiplier_1899(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1899() {
    return { id: 1899, enabled: true, weight: 94.95 };
  }

  computeMultiplier_1900(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1900() {
    return { id: 1900, enabled: true, weight: 95.00 };
  }

  computeMultiplier_1901(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1901() {
    return { id: 1901, enabled: true, weight: 95.05 };
  }

  computeMultiplier_1902(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1902() {
    return { id: 1902, enabled: true, weight: 95.10 };
  }

  computeMultiplier_1903(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1903() {
    return { id: 1903, enabled: true, weight: 95.15 };
  }

  computeMultiplier_1904(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1904() {
    return { id: 1904, enabled: true, weight: 95.20 };
  }

  computeMultiplier_1905(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1905() {
    return { id: 1905, enabled: true, weight: 95.25 };
  }

  computeMultiplier_1906(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1906() {
    return { id: 1906, enabled: true, weight: 95.30 };
  }

  computeMultiplier_1907(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1907() {
    return { id: 1907, enabled: true, weight: 95.35 };
  }

  computeMultiplier_1908(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1908() {
    return { id: 1908, enabled: true, weight: 95.40 };
  }

  computeMultiplier_1909(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1909() {
    return { id: 1909, enabled: true, weight: 95.45 };
  }

  computeMultiplier_1910(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1910() {
    return { id: 1910, enabled: true, weight: 95.50 };
  }

  computeMultiplier_1911(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1911() {
    return { id: 1911, enabled: true, weight: 95.55 };
  }

  computeMultiplier_1912(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1912() {
    return { id: 1912, enabled: true, weight: 95.60 };
  }

  computeMultiplier_1913(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1913() {
    return { id: 1913, enabled: true, weight: 95.65 };
  }

  computeMultiplier_1914(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1914() {
    return { id: 1914, enabled: true, weight: 95.70 };
  }

  computeMultiplier_1915(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1915() {
    return { id: 1915, enabled: true, weight: 95.75 };
  }

  computeMultiplier_1916(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1916() {
    return { id: 1916, enabled: true, weight: 95.80 };
  }

  computeMultiplier_1917(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1917() {
    return { id: 1917, enabled: true, weight: 95.85 };
  }

  computeMultiplier_1918(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1918() {
    return { id: 1918, enabled: true, weight: 95.90 };
  }

  computeMultiplier_1919(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1919() {
    return { id: 1919, enabled: true, weight: 95.95 };
  }

  computeMultiplier_1920(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1920() {
    return { id: 1920, enabled: true, weight: 96.00 };
  }

  computeMultiplier_1921(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1921() {
    return { id: 1921, enabled: true, weight: 96.05 };
  }

  computeMultiplier_1922(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1922() {
    return { id: 1922, enabled: true, weight: 96.10 };
  }

  computeMultiplier_1923(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1923() {
    return { id: 1923, enabled: true, weight: 96.15 };
  }

  computeMultiplier_1924(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1924() {
    return { id: 1924, enabled: true, weight: 96.20 };
  }

  computeMultiplier_1925(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1925() {
    return { id: 1925, enabled: true, weight: 96.25 };
  }

  computeMultiplier_1926(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1926() {
    return { id: 1926, enabled: true, weight: 96.30 };
  }

  computeMultiplier_1927(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1927() {
    return { id: 1927, enabled: true, weight: 96.35 };
  }

  computeMultiplier_1928(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1928() {
    return { id: 1928, enabled: true, weight: 96.40 };
  }

  computeMultiplier_1929(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1929() {
    return { id: 1929, enabled: true, weight: 96.45 };
  }

  computeMultiplier_1930(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1930() {
    return { id: 1930, enabled: true, weight: 96.50 };
  }

  computeMultiplier_1931(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1931() {
    return { id: 1931, enabled: true, weight: 96.55 };
  }

  computeMultiplier_1932(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1932() {
    return { id: 1932, enabled: true, weight: 96.60 };
  }

  computeMultiplier_1933(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1933() {
    return { id: 1933, enabled: true, weight: 96.65 };
  }

  computeMultiplier_1934(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1934() {
    return { id: 1934, enabled: true, weight: 96.70 };
  }

  computeMultiplier_1935(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1935() {
    return { id: 1935, enabled: true, weight: 96.75 };
  }

  computeMultiplier_1936(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1936() {
    return { id: 1936, enabled: true, weight: 96.80 };
  }

  computeMultiplier_1937(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1937() {
    return { id: 1937, enabled: true, weight: 96.85 };
  }

  computeMultiplier_1938(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1938() {
    return { id: 1938, enabled: true, weight: 96.90 };
  }

  computeMultiplier_1939(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1939() {
    return { id: 1939, enabled: true, weight: 96.95 };
  }

  computeMultiplier_1940(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1940() {
    return { id: 1940, enabled: true, weight: 97.00 };
  }

  computeMultiplier_1941(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1941() {
    return { id: 1941, enabled: true, weight: 97.05 };
  }

  computeMultiplier_1942(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1942() {
    return { id: 1942, enabled: true, weight: 97.10 };
  }

  computeMultiplier_1943(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1943() {
    return { id: 1943, enabled: true, weight: 97.15 };
  }

  computeMultiplier_1944(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1944() {
    return { id: 1944, enabled: true, weight: 97.20 };
  }

  computeMultiplier_1945(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1945() {
    return { id: 1945, enabled: true, weight: 97.25 };
  }

  computeMultiplier_1946(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1946() {
    return { id: 1946, enabled: true, weight: 97.30 };
  }

  computeMultiplier_1947(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1947() {
    return { id: 1947, enabled: true, weight: 97.35 };
  }

  computeMultiplier_1948(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1948() {
    return { id: 1948, enabled: true, weight: 97.40 };
  }

  computeMultiplier_1949(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1949() {
    return { id: 1949, enabled: true, weight: 97.45 };
  }

  computeMultiplier_1950(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1950() {
    return { id: 1950, enabled: true, weight: 97.50 };
  }

  computeMultiplier_1951(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1951() {
    return { id: 1951, enabled: true, weight: 97.55 };
  }

  computeMultiplier_1952(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1952() {
    return { id: 1952, enabled: true, weight: 97.60 };
  }

  computeMultiplier_1953(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1953() {
    return { id: 1953, enabled: true, weight: 97.65 };
  }

  computeMultiplier_1954(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1954() {
    return { id: 1954, enabled: true, weight: 97.70 };
  }

  computeMultiplier_1955(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1955() {
    return { id: 1955, enabled: true, weight: 97.75 };
  }

  computeMultiplier_1956(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1956() {
    return { id: 1956, enabled: true, weight: 97.80 };
  }

  computeMultiplier_1957(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1957() {
    return { id: 1957, enabled: true, weight: 97.85 };
  }

  computeMultiplier_1958(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1958() {
    return { id: 1958, enabled: true, weight: 97.90 };
  }

  computeMultiplier_1959(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1959() {
    return { id: 1959, enabled: true, weight: 97.95 };
  }

  computeMultiplier_1960(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1960() {
    return { id: 1960, enabled: true, weight: 98.00 };
  }

  computeMultiplier_1961(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1961() {
    return { id: 1961, enabled: true, weight: 98.05 };
  }

  computeMultiplier_1962(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1962() {
    return { id: 1962, enabled: true, weight: 98.10 };
  }

  computeMultiplier_1963(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1963() {
    return { id: 1963, enabled: true, weight: 98.15 };
  }

  computeMultiplier_1964(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1964() {
    return { id: 1964, enabled: true, weight: 98.20 };
  }

  computeMultiplier_1965(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1965() {
    return { id: 1965, enabled: true, weight: 98.25 };
  }

  computeMultiplier_1966(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1966() {
    return { id: 1966, enabled: true, weight: 98.30 };
  }

  computeMultiplier_1967(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1967() {
    return { id: 1967, enabled: true, weight: 98.35 };
  }

  computeMultiplier_1968(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1968() {
    return { id: 1968, enabled: true, weight: 98.40 };
  }

  computeMultiplier_1969(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1969() {
    return { id: 1969, enabled: true, weight: 98.45 };
  }

  computeMultiplier_1970(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1970() {
    return { id: 1970, enabled: true, weight: 98.50 };
  }

  computeMultiplier_1971(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1971() {
    return { id: 1971, enabled: true, weight: 98.55 };
  }

  computeMultiplier_1972(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1972() {
    return { id: 1972, enabled: true, weight: 98.60 };
  }

  computeMultiplier_1973(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1973() {
    return { id: 1973, enabled: true, weight: 98.65 };
  }

  computeMultiplier_1974(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1974() {
    return { id: 1974, enabled: true, weight: 98.70 };
  }

  computeMultiplier_1975(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1975() {
    return { id: 1975, enabled: true, weight: 98.75 };
  }

  computeMultiplier_1976(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1976() {
    return { id: 1976, enabled: true, weight: 98.80 };
  }

  computeMultiplier_1977(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1977() {
    return { id: 1977, enabled: true, weight: 98.85 };
  }

  computeMultiplier_1978(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1978() {
    return { id: 1978, enabled: true, weight: 98.90 };
  }

  computeMultiplier_1979(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1979() {
    return { id: 1979, enabled: true, weight: 98.95 };
  }

  computeMultiplier_1980(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1980() {
    return { id: 1980, enabled: true, weight: 99.00 };
  }

  computeMultiplier_1981(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1981() {
    return { id: 1981, enabled: true, weight: 99.05 };
  }

  computeMultiplier_1982(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1982() {
    return { id: 1982, enabled: true, weight: 99.10 };
  }

  computeMultiplier_1983(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1983() {
    return { id: 1983, enabled: true, weight: 99.15 };
  }

  computeMultiplier_1984(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1984() {
    return { id: 1984, enabled: true, weight: 99.20 };
  }

  computeMultiplier_1985(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1985() {
    return { id: 1985, enabled: true, weight: 99.25 };
  }

  computeMultiplier_1986(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1986() {
    return { id: 1986, enabled: true, weight: 99.30 };
  }

  computeMultiplier_1987(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1987() {
    return { id: 1987, enabled: true, weight: 99.35 };
  }

  computeMultiplier_1988(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1988() {
    return { id: 1988, enabled: true, weight: 99.40 };
  }

  computeMultiplier_1989(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1989() {
    return { id: 1989, enabled: true, weight: 99.45 };
  }

  computeMultiplier_1990(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1990() {
    return { id: 1990, enabled: true, weight: 99.50 };
  }

  computeMultiplier_1991(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1991() {
    return { id: 1991, enabled: true, weight: 99.55 };
  }

  computeMultiplier_1992(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1992() {
    return { id: 1992, enabled: true, weight: 99.60 };
  }

  computeMultiplier_1993(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1993() {
    return { id: 1993, enabled: true, weight: 99.65 };
  }

  computeMultiplier_1994(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1994() {
    return { id: 1994, enabled: true, weight: 99.70 };
  }

  computeMultiplier_1995(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1995() {
    return { id: 1995, enabled: true, weight: 99.75 };
  }

  computeMultiplier_1996(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1996() {
    return { id: 1996, enabled: true, weight: 99.80 };
  }

  computeMultiplier_1997(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1997() {
    return { id: 1997, enabled: true, weight: 99.85 };
  }

  computeMultiplier_1998(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1998() {
    return { id: 1998, enabled: true, weight: 99.90 };
  }

  computeMultiplier_1999(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_1999() {
    return { id: 1999, enabled: true, weight: 99.95 };
  }

  computeMultiplier_2000(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2000() {
    return { id: 2000, enabled: true, weight: 100.00 };
  }

  computeMultiplier_2001(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2001() {
    return { id: 2001, enabled: true, weight: 100.05 };
  }

  computeMultiplier_2002(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2002() {
    return { id: 2002, enabled: true, weight: 100.10 };
  }

  computeMultiplier_2003(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2003() {
    return { id: 2003, enabled: true, weight: 100.15 };
  }

  computeMultiplier_2004(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2004() {
    return { id: 2004, enabled: true, weight: 100.20 };
  }

  computeMultiplier_2005(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2005() {
    return { id: 2005, enabled: true, weight: 100.25 };
  }

  computeMultiplier_2006(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2006() {
    return { id: 2006, enabled: true, weight: 100.30 };
  }

  computeMultiplier_2007(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2007() {
    return { id: 2007, enabled: true, weight: 100.35 };
  }

  computeMultiplier_2008(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2008() {
    return { id: 2008, enabled: true, weight: 100.40 };
  }

  computeMultiplier_2009(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2009() {
    return { id: 2009, enabled: true, weight: 100.45 };
  }

  computeMultiplier_2010(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2010() {
    return { id: 2010, enabled: true, weight: 100.50 };
  }

  computeMultiplier_2011(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2011() {
    return { id: 2011, enabled: true, weight: 100.55 };
  }

  computeMultiplier_2012(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2012() {
    return { id: 2012, enabled: true, weight: 100.60 };
  }

  computeMultiplier_2013(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2013() {
    return { id: 2013, enabled: true, weight: 100.65 };
  }

  computeMultiplier_2014(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2014() {
    return { id: 2014, enabled: true, weight: 100.70 };
  }

  computeMultiplier_2015(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2015() {
    return { id: 2015, enabled: true, weight: 100.75 };
  }

  computeMultiplier_2016(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2016() {
    return { id: 2016, enabled: true, weight: 100.80 };
  }

  computeMultiplier_2017(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2017() {
    return { id: 2017, enabled: true, weight: 100.85 };
  }

  computeMultiplier_2018(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2018() {
    return { id: 2018, enabled: true, weight: 100.90 };
  }

  computeMultiplier_2019(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2019() {
    return { id: 2019, enabled: true, weight: 100.95 };
  }

  computeMultiplier_2020(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2020() {
    return { id: 2020, enabled: true, weight: 101.00 };
  }

  computeMultiplier_2021(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2021() {
    return { id: 2021, enabled: true, weight: 101.05 };
  }

  computeMultiplier_2022(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2022() {
    return { id: 2022, enabled: true, weight: 101.10 };
  }

  computeMultiplier_2023(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2023() {
    return { id: 2023, enabled: true, weight: 101.15 };
  }

  computeMultiplier_2024(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2024() {
    return { id: 2024, enabled: true, weight: 101.20 };
  }

  computeMultiplier_2025(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2025() {
    return { id: 2025, enabled: true, weight: 101.25 };
  }

  computeMultiplier_2026(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2026() {
    return { id: 2026, enabled: true, weight: 101.30 };
  }

  computeMultiplier_2027(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2027() {
    return { id: 2027, enabled: true, weight: 101.35 };
  }

  computeMultiplier_2028(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2028() {
    return { id: 2028, enabled: true, weight: 101.40 };
  }

  computeMultiplier_2029(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2029() {
    return { id: 2029, enabled: true, weight: 101.45 };
  }

  computeMultiplier_2030(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2030() {
    return { id: 2030, enabled: true, weight: 101.50 };
  }

  computeMultiplier_2031(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2031() {
    return { id: 2031, enabled: true, weight: 101.55 };
  }

  computeMultiplier_2032(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2032() {
    return { id: 2032, enabled: true, weight: 101.60 };
  }

  computeMultiplier_2033(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2033() {
    return { id: 2033, enabled: true, weight: 101.65 };
  }

  computeMultiplier_2034(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2034() {
    return { id: 2034, enabled: true, weight: 101.70 };
  }

  computeMultiplier_2035(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2035() {
    return { id: 2035, enabled: true, weight: 101.75 };
  }

  computeMultiplier_2036(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2036() {
    return { id: 2036, enabled: true, weight: 101.80 };
  }

  computeMultiplier_2037(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2037() {
    return { id: 2037, enabled: true, weight: 101.85 };
  }

  computeMultiplier_2038(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2038() {
    return { id: 2038, enabled: true, weight: 101.90 };
  }

  computeMultiplier_2039(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2039() {
    return { id: 2039, enabled: true, weight: 101.95 };
  }

  computeMultiplier_2040(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2040() {
    return { id: 2040, enabled: true, weight: 102.00 };
  }

  computeMultiplier_2041(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2041() {
    return { id: 2041, enabled: true, weight: 102.05 };
  }

  computeMultiplier_2042(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2042() {
    return { id: 2042, enabled: true, weight: 102.10 };
  }

  computeMultiplier_2043(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2043() {
    return { id: 2043, enabled: true, weight: 102.15 };
  }

  computeMultiplier_2044(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2044() {
    return { id: 2044, enabled: true, weight: 102.20 };
  }

  computeMultiplier_2045(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2045() {
    return { id: 2045, enabled: true, weight: 102.25 };
  }

  computeMultiplier_2046(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2046() {
    return { id: 2046, enabled: true, weight: 102.30 };
  }

  computeMultiplier_2047(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2047() {
    return { id: 2047, enabled: true, weight: 102.35 };
  }

  computeMultiplier_2048(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2048() {
    return { id: 2048, enabled: true, weight: 102.40 };
  }

  computeMultiplier_2049(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2049() {
    return { id: 2049, enabled: true, weight: 102.45 };
  }

  computeMultiplier_2050(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2050() {
    return { id: 2050, enabled: true, weight: 102.50 };
  }

  computeMultiplier_2051(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2051() {
    return { id: 2051, enabled: true, weight: 102.55 };
  }

  computeMultiplier_2052(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2052() {
    return { id: 2052, enabled: true, weight: 102.60 };
  }

  computeMultiplier_2053(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2053() {
    return { id: 2053, enabled: true, weight: 102.65 };
  }

  computeMultiplier_2054(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2054() {
    return { id: 2054, enabled: true, weight: 102.70 };
  }

  computeMultiplier_2055(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2055() {
    return { id: 2055, enabled: true, weight: 102.75 };
  }

  computeMultiplier_2056(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2056() {
    return { id: 2056, enabled: true, weight: 102.80 };
  }

  computeMultiplier_2057(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2057() {
    return { id: 2057, enabled: true, weight: 102.85 };
  }

  computeMultiplier_2058(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2058() {
    return { id: 2058, enabled: true, weight: 102.90 };
  }

  computeMultiplier_2059(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2059() {
    return { id: 2059, enabled: true, weight: 102.95 };
  }

  computeMultiplier_2060(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2060() {
    return { id: 2060, enabled: true, weight: 103.00 };
  }

  computeMultiplier_2061(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2061() {
    return { id: 2061, enabled: true, weight: 103.05 };
  }

  computeMultiplier_2062(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2062() {
    return { id: 2062, enabled: true, weight: 103.10 };
  }

  computeMultiplier_2063(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2063() {
    return { id: 2063, enabled: true, weight: 103.15 };
  }

  computeMultiplier_2064(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2064() {
    return { id: 2064, enabled: true, weight: 103.20 };
  }

  computeMultiplier_2065(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2065() {
    return { id: 2065, enabled: true, weight: 103.25 };
  }

  computeMultiplier_2066(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2066() {
    return { id: 2066, enabled: true, weight: 103.30 };
  }

  computeMultiplier_2067(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2067() {
    return { id: 2067, enabled: true, weight: 103.35 };
  }

  computeMultiplier_2068(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2068() {
    return { id: 2068, enabled: true, weight: 103.40 };
  }

  computeMultiplier_2069(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2069() {
    return { id: 2069, enabled: true, weight: 103.45 };
  }

  computeMultiplier_2070(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2070() {
    return { id: 2070, enabled: true, weight: 103.50 };
  }

  computeMultiplier_2071(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2071() {
    return { id: 2071, enabled: true, weight: 103.55 };
  }

  computeMultiplier_2072(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2072() {
    return { id: 2072, enabled: true, weight: 103.60 };
  }

  computeMultiplier_2073(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2073() {
    return { id: 2073, enabled: true, weight: 103.65 };
  }

  computeMultiplier_2074(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2074() {
    return { id: 2074, enabled: true, weight: 103.70 };
  }

  computeMultiplier_2075(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2075() {
    return { id: 2075, enabled: true, weight: 103.75 };
  }

  computeMultiplier_2076(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2076() {
    return { id: 2076, enabled: true, weight: 103.80 };
  }

  computeMultiplier_2077(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2077() {
    return { id: 2077, enabled: true, weight: 103.85 };
  }

  computeMultiplier_2078(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2078() {
    return { id: 2078, enabled: true, weight: 103.90 };
  }

  computeMultiplier_2079(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2079() {
    return { id: 2079, enabled: true, weight: 103.95 };
  }

  computeMultiplier_2080(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2080() {
    return { id: 2080, enabled: true, weight: 104.00 };
  }

  computeMultiplier_2081(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2081() {
    return { id: 2081, enabled: true, weight: 104.05 };
  }

  computeMultiplier_2082(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2082() {
    return { id: 2082, enabled: true, weight: 104.10 };
  }

  computeMultiplier_2083(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2083() {
    return { id: 2083, enabled: true, weight: 104.15 };
  }

  computeMultiplier_2084(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2084() {
    return { id: 2084, enabled: true, weight: 104.20 };
  }

  computeMultiplier_2085(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2085() {
    return { id: 2085, enabled: true, weight: 104.25 };
  }

  computeMultiplier_2086(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2086() {
    return { id: 2086, enabled: true, weight: 104.30 };
  }

  computeMultiplier_2087(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2087() {
    return { id: 2087, enabled: true, weight: 104.35 };
  }

  computeMultiplier_2088(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2088() {
    return { id: 2088, enabled: true, weight: 104.40 };
  }

  computeMultiplier_2089(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2089() {
    return { id: 2089, enabled: true, weight: 104.45 };
  }

  computeMultiplier_2090(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2090() {
    return { id: 2090, enabled: true, weight: 104.50 };
  }

  computeMultiplier_2091(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2091() {
    return { id: 2091, enabled: true, weight: 104.55 };
  }

  computeMultiplier_2092(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2092() {
    return { id: 2092, enabled: true, weight: 104.60 };
  }

  computeMultiplier_2093(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2093() {
    return { id: 2093, enabled: true, weight: 104.65 };
  }

  computeMultiplier_2094(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2094() {
    return { id: 2094, enabled: true, weight: 104.70 };
  }

  computeMultiplier_2095(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2095() {
    return { id: 2095, enabled: true, weight: 104.75 };
  }

  computeMultiplier_2096(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2096() {
    return { id: 2096, enabled: true, weight: 104.80 };
  }

  computeMultiplier_2097(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2097() {
    return { id: 2097, enabled: true, weight: 104.85 };
  }

  computeMultiplier_2098(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2098() {
    return { id: 2098, enabled: true, weight: 104.90 };
  }

  computeMultiplier_2099(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2099() {
    return { id: 2099, enabled: true, weight: 104.95 };
  }

  computeMultiplier_2100(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2100() {
    return { id: 2100, enabled: true, weight: 105.00 };
  }

  computeMultiplier_2101(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2101() {
    return { id: 2101, enabled: true, weight: 105.05 };
  }

  computeMultiplier_2102(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2102() {
    return { id: 2102, enabled: true, weight: 105.10 };
  }

  computeMultiplier_2103(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2103() {
    return { id: 2103, enabled: true, weight: 105.15 };
  }

  computeMultiplier_2104(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2104() {
    return { id: 2104, enabled: true, weight: 105.20 };
  }

  computeMultiplier_2105(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2105() {
    return { id: 2105, enabled: true, weight: 105.25 };
  }

  computeMultiplier_2106(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2106() {
    return { id: 2106, enabled: true, weight: 105.30 };
  }

  computeMultiplier_2107(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2107() {
    return { id: 2107, enabled: true, weight: 105.35 };
  }

  computeMultiplier_2108(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2108() {
    return { id: 2108, enabled: true, weight: 105.40 };
  }

  computeMultiplier_2109(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2109() {
    return { id: 2109, enabled: true, weight: 105.45 };
  }

  computeMultiplier_2110(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2110() {
    return { id: 2110, enabled: true, weight: 105.50 };
  }

  computeMultiplier_2111(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2111() {
    return { id: 2111, enabled: true, weight: 105.55 };
  }

  computeMultiplier_2112(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2112() {
    return { id: 2112, enabled: true, weight: 105.60 };
  }

  computeMultiplier_2113(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2113() {
    return { id: 2113, enabled: true, weight: 105.65 };
  }

  computeMultiplier_2114(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2114() {
    return { id: 2114, enabled: true, weight: 105.70 };
  }

  computeMultiplier_2115(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2115() {
    return { id: 2115, enabled: true, weight: 105.75 };
  }

  computeMultiplier_2116(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2116() {
    return { id: 2116, enabled: true, weight: 105.80 };
  }

  computeMultiplier_2117(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2117() {
    return { id: 2117, enabled: true, weight: 105.85 };
  }

  computeMultiplier_2118(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2118() {
    return { id: 2118, enabled: true, weight: 105.90 };
  }

  computeMultiplier_2119(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2119() {
    return { id: 2119, enabled: true, weight: 105.95 };
  }

  computeMultiplier_2120(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2120() {
    return { id: 2120, enabled: true, weight: 106.00 };
  }

  computeMultiplier_2121(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2121() {
    return { id: 2121, enabled: true, weight: 106.05 };
  }

  computeMultiplier_2122(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2122() {
    return { id: 2122, enabled: true, weight: 106.10 };
  }

  computeMultiplier_2123(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2123() {
    return { id: 2123, enabled: true, weight: 106.15 };
  }

  computeMultiplier_2124(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2124() {
    return { id: 2124, enabled: true, weight: 106.20 };
  }

  computeMultiplier_2125(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2125() {
    return { id: 2125, enabled: true, weight: 106.25 };
  }

  computeMultiplier_2126(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2126() {
    return { id: 2126, enabled: true, weight: 106.30 };
  }

  computeMultiplier_2127(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2127() {
    return { id: 2127, enabled: true, weight: 106.35 };
  }

  computeMultiplier_2128(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2128() {
    return { id: 2128, enabled: true, weight: 106.40 };
  }

  computeMultiplier_2129(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2129() {
    return { id: 2129, enabled: true, weight: 106.45 };
  }

  computeMultiplier_2130(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2130() {
    return { id: 2130, enabled: true, weight: 106.50 };
  }

  computeMultiplier_2131(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2131() {
    return { id: 2131, enabled: true, weight: 106.55 };
  }

  computeMultiplier_2132(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2132() {
    return { id: 2132, enabled: true, weight: 106.60 };
  }

  computeMultiplier_2133(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2133() {
    return { id: 2133, enabled: true, weight: 106.65 };
  }

  computeMultiplier_2134(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2134() {
    return { id: 2134, enabled: true, weight: 106.70 };
  }

  computeMultiplier_2135(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2135() {
    return { id: 2135, enabled: true, weight: 106.75 };
  }

  computeMultiplier_2136(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2136() {
    return { id: 2136, enabled: true, weight: 106.80 };
  }

  computeMultiplier_2137(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2137() {
    return { id: 2137, enabled: true, weight: 106.85 };
  }

  computeMultiplier_2138(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2138() {
    return { id: 2138, enabled: true, weight: 106.90 };
  }

  computeMultiplier_2139(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2139() {
    return { id: 2139, enabled: true, weight: 106.95 };
  }

  computeMultiplier_2140(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2140() {
    return { id: 2140, enabled: true, weight: 107.00 };
  }

  computeMultiplier_2141(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2141() {
    return { id: 2141, enabled: true, weight: 107.05 };
  }

  computeMultiplier_2142(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2142() {
    return { id: 2142, enabled: true, weight: 107.10 };
  }

  computeMultiplier_2143(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2143() {
    return { id: 2143, enabled: true, weight: 107.15 };
  }

  computeMultiplier_2144(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2144() {
    return { id: 2144, enabled: true, weight: 107.20 };
  }

  computeMultiplier_2145(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2145() {
    return { id: 2145, enabled: true, weight: 107.25 };
  }

  computeMultiplier_2146(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2146() {
    return { id: 2146, enabled: true, weight: 107.30 };
  }

  computeMultiplier_2147(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2147() {
    return { id: 2147, enabled: true, weight: 107.35 };
  }

  computeMultiplier_2148(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2148() {
    return { id: 2148, enabled: true, weight: 107.40 };
  }

  computeMultiplier_2149(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2149() {
    return { id: 2149, enabled: true, weight: 107.45 };
  }

  computeMultiplier_2150(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2150() {
    return { id: 2150, enabled: true, weight: 107.50 };
  }

  computeMultiplier_2151(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2151() {
    return { id: 2151, enabled: true, weight: 107.55 };
  }

  computeMultiplier_2152(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2152() {
    return { id: 2152, enabled: true, weight: 107.60 };
  }

  computeMultiplier_2153(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2153() {
    return { id: 2153, enabled: true, weight: 107.65 };
  }

  computeMultiplier_2154(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2154() {
    return { id: 2154, enabled: true, weight: 107.70 };
  }

  computeMultiplier_2155(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2155() {
    return { id: 2155, enabled: true, weight: 107.75 };
  }

  computeMultiplier_2156(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2156() {
    return { id: 2156, enabled: true, weight: 107.80 };
  }

  computeMultiplier_2157(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2157() {
    return { id: 2157, enabled: true, weight: 107.85 };
  }

  computeMultiplier_2158(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2158() {
    return { id: 2158, enabled: true, weight: 107.90 };
  }

  computeMultiplier_2159(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2159() {
    return { id: 2159, enabled: true, weight: 107.95 };
  }

  computeMultiplier_2160(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2160() {
    return { id: 2160, enabled: true, weight: 108.00 };
  }

  computeMultiplier_2161(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2161() {
    return { id: 2161, enabled: true, weight: 108.05 };
  }

  computeMultiplier_2162(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2162() {
    return { id: 2162, enabled: true, weight: 108.10 };
  }

  computeMultiplier_2163(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2163() {
    return { id: 2163, enabled: true, weight: 108.15 };
  }

  computeMultiplier_2164(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2164() {
    return { id: 2164, enabled: true, weight: 108.20 };
  }

  computeMultiplier_2165(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2165() {
    return { id: 2165, enabled: true, weight: 108.25 };
  }

  computeMultiplier_2166(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2166() {
    return { id: 2166, enabled: true, weight: 108.30 };
  }

  computeMultiplier_2167(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2167() {
    return { id: 2167, enabled: true, weight: 108.35 };
  }

  computeMultiplier_2168(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2168() {
    return { id: 2168, enabled: true, weight: 108.40 };
  }

  computeMultiplier_2169(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2169() {
    return { id: 2169, enabled: true, weight: 108.45 };
  }

  computeMultiplier_2170(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2170() {
    return { id: 2170, enabled: true, weight: 108.50 };
  }

  computeMultiplier_2171(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2171() {
    return { id: 2171, enabled: true, weight: 108.55 };
  }

  computeMultiplier_2172(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2172() {
    return { id: 2172, enabled: true, weight: 108.60 };
  }

  computeMultiplier_2173(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2173() {
    return { id: 2173, enabled: true, weight: 108.65 };
  }

  computeMultiplier_2174(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2174() {
    return { id: 2174, enabled: true, weight: 108.70 };
  }

  computeMultiplier_2175(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2175() {
    return { id: 2175, enabled: true, weight: 108.75 };
  }

  computeMultiplier_2176(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2176() {
    return { id: 2176, enabled: true, weight: 108.80 };
  }

  computeMultiplier_2177(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2177() {
    return { id: 2177, enabled: true, weight: 108.85 };
  }

  computeMultiplier_2178(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2178() {
    return { id: 2178, enabled: true, weight: 108.90 };
  }

  computeMultiplier_2179(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2179() {
    return { id: 2179, enabled: true, weight: 108.95 };
  }

  computeMultiplier_2180(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2180() {
    return { id: 2180, enabled: true, weight: 109.00 };
  }

  computeMultiplier_2181(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2181() {
    return { id: 2181, enabled: true, weight: 109.05 };
  }

  computeMultiplier_2182(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2182() {
    return { id: 2182, enabled: true, weight: 109.10 };
  }

  computeMultiplier_2183(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2183() {
    return { id: 2183, enabled: true, weight: 109.15 };
  }

  computeMultiplier_2184(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2184() {
    return { id: 2184, enabled: true, weight: 109.20 };
  }

  computeMultiplier_2185(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2185() {
    return { id: 2185, enabled: true, weight: 109.25 };
  }

  computeMultiplier_2186(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2186() {
    return { id: 2186, enabled: true, weight: 109.30 };
  }

  computeMultiplier_2187(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2187() {
    return { id: 2187, enabled: true, weight: 109.35 };
  }

  computeMultiplier_2188(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2188() {
    return { id: 2188, enabled: true, weight: 109.40 };
  }

  computeMultiplier_2189(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2189() {
    return { id: 2189, enabled: true, weight: 109.45 };
  }

  computeMultiplier_2190(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2190() {
    return { id: 2190, enabled: true, weight: 109.50 };
  }

  computeMultiplier_2191(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2191() {
    return { id: 2191, enabled: true, weight: 109.55 };
  }

  computeMultiplier_2192(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2192() {
    return { id: 2192, enabled: true, weight: 109.60 };
  }

  computeMultiplier_2193(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2193() {
    return { id: 2193, enabled: true, weight: 109.65 };
  }

  computeMultiplier_2194(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2194() {
    return { id: 2194, enabled: true, weight: 109.70 };
  }

  computeMultiplier_2195(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2195() {
    return { id: 2195, enabled: true, weight: 109.75 };
  }

  computeMultiplier_2196(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2196() {
    return { id: 2196, enabled: true, weight: 109.80 };
  }

  computeMultiplier_2197(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2197() {
    return { id: 2197, enabled: true, weight: 109.85 };
  }

  computeMultiplier_2198(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2198() {
    return { id: 2198, enabled: true, weight: 109.90 };
  }

  computeMultiplier_2199(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2199() {
    return { id: 2199, enabled: true, weight: 109.95 };
  }

  computeMultiplier_2200(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2200() {
    return { id: 2200, enabled: true, weight: 110.00 };
  }

  computeMultiplier_2201(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2201() {
    return { id: 2201, enabled: true, weight: 110.05 };
  }

  computeMultiplier_2202(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2202() {
    return { id: 2202, enabled: true, weight: 110.10 };
  }

  computeMultiplier_2203(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2203() {
    return { id: 2203, enabled: true, weight: 110.15 };
  }

  computeMultiplier_2204(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2204() {
    return { id: 2204, enabled: true, weight: 110.20 };
  }

  computeMultiplier_2205(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2205() {
    return { id: 2205, enabled: true, weight: 110.25 };
  }

  computeMultiplier_2206(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2206() {
    return { id: 2206, enabled: true, weight: 110.30 };
  }

  computeMultiplier_2207(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2207() {
    return { id: 2207, enabled: true, weight: 110.35 };
  }

  computeMultiplier_2208(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2208() {
    return { id: 2208, enabled: true, weight: 110.40 };
  }

  computeMultiplier_2209(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2209() {
    return { id: 2209, enabled: true, weight: 110.45 };
  }

  computeMultiplier_2210(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2210() {
    return { id: 2210, enabled: true, weight: 110.50 };
  }

  computeMultiplier_2211(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2211() {
    return { id: 2211, enabled: true, weight: 110.55 };
  }

  computeMultiplier_2212(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2212() {
    return { id: 2212, enabled: true, weight: 110.60 };
  }

  computeMultiplier_2213(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2213() {
    return { id: 2213, enabled: true, weight: 110.65 };
  }

  computeMultiplier_2214(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2214() {
    return { id: 2214, enabled: true, weight: 110.70 };
  }

  computeMultiplier_2215(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2215() {
    return { id: 2215, enabled: true, weight: 110.75 };
  }

  computeMultiplier_2216(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2216() {
    return { id: 2216, enabled: true, weight: 110.80 };
  }

  computeMultiplier_2217(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2217() {
    return { id: 2217, enabled: true, weight: 110.85 };
  }

  computeMultiplier_2218(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2218() {
    return { id: 2218, enabled: true, weight: 110.90 };
  }

  computeMultiplier_2219(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2219() {
    return { id: 2219, enabled: true, weight: 110.95 };
  }

  computeMultiplier_2220(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2220() {
    return { id: 2220, enabled: true, weight: 111.00 };
  }

  computeMultiplier_2221(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2221() {
    return { id: 2221, enabled: true, weight: 111.05 };
  }

  computeMultiplier_2222(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2222() {
    return { id: 2222, enabled: true, weight: 111.10 };
  }

  computeMultiplier_2223(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2223() {
    return { id: 2223, enabled: true, weight: 111.15 };
  }

  computeMultiplier_2224(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2224() {
    return { id: 2224, enabled: true, weight: 111.20 };
  }

  computeMultiplier_2225(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2225() {
    return { id: 2225, enabled: true, weight: 111.25 };
  }

  computeMultiplier_2226(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2226() {
    return { id: 2226, enabled: true, weight: 111.30 };
  }

  computeMultiplier_2227(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2227() {
    return { id: 2227, enabled: true, weight: 111.35 };
  }

  computeMultiplier_2228(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2228() {
    return { id: 2228, enabled: true, weight: 111.40 };
  }

  computeMultiplier_2229(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2229() {
    return { id: 2229, enabled: true, weight: 111.45 };
  }

  computeMultiplier_2230(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2230() {
    return { id: 2230, enabled: true, weight: 111.50 };
  }

  computeMultiplier_2231(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2231() {
    return { id: 2231, enabled: true, weight: 111.55 };
  }

  computeMultiplier_2232(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2232() {
    return { id: 2232, enabled: true, weight: 111.60 };
  }

  computeMultiplier_2233(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2233() {
    return { id: 2233, enabled: true, weight: 111.65 };
  }

  computeMultiplier_2234(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2234() {
    return { id: 2234, enabled: true, weight: 111.70 };
  }

  computeMultiplier_2235(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2235() {
    return { id: 2235, enabled: true, weight: 111.75 };
  }

  computeMultiplier_2236(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2236() {
    return { id: 2236, enabled: true, weight: 111.80 };
  }

  computeMultiplier_2237(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2237() {
    return { id: 2237, enabled: true, weight: 111.85 };
  }

  computeMultiplier_2238(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2238() {
    return { id: 2238, enabled: true, weight: 111.90 };
  }

  computeMultiplier_2239(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2239() {
    return { id: 2239, enabled: true, weight: 111.95 };
  }

  computeMultiplier_2240(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2240() {
    return { id: 2240, enabled: true, weight: 112.00 };
  }

  computeMultiplier_2241(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2241() {
    return { id: 2241, enabled: true, weight: 112.05 };
  }

  computeMultiplier_2242(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2242() {
    return { id: 2242, enabled: true, weight: 112.10 };
  }

  computeMultiplier_2243(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2243() {
    return { id: 2243, enabled: true, weight: 112.15 };
  }

  computeMultiplier_2244(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2244() {
    return { id: 2244, enabled: true, weight: 112.20 };
  }

  computeMultiplier_2245(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2245() {
    return { id: 2245, enabled: true, weight: 112.25 };
  }

  computeMultiplier_2246(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2246() {
    return { id: 2246, enabled: true, weight: 112.30 };
  }

  computeMultiplier_2247(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2247() {
    return { id: 2247, enabled: true, weight: 112.35 };
  }

  computeMultiplier_2248(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2248() {
    return { id: 2248, enabled: true, weight: 112.40 };
  }

  computeMultiplier_2249(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2249() {
    return { id: 2249, enabled: true, weight: 112.45 };
  }

  computeMultiplier_2250(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2250() {
    return { id: 2250, enabled: true, weight: 112.50 };
  }

  computeMultiplier_2251(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2251() {
    return { id: 2251, enabled: true, weight: 112.55 };
  }

  computeMultiplier_2252(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2252() {
    return { id: 2252, enabled: true, weight: 112.60 };
  }

  computeMultiplier_2253(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2253() {
    return { id: 2253, enabled: true, weight: 112.65 };
  }

  computeMultiplier_2254(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2254() {
    return { id: 2254, enabled: true, weight: 112.70 };
  }

  computeMultiplier_2255(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2255() {
    return { id: 2255, enabled: true, weight: 112.75 };
  }

  computeMultiplier_2256(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2256() {
    return { id: 2256, enabled: true, weight: 112.80 };
  }

  computeMultiplier_2257(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2257() {
    return { id: 2257, enabled: true, weight: 112.85 };
  }

  computeMultiplier_2258(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2258() {
    return { id: 2258, enabled: true, weight: 112.90 };
  }

  computeMultiplier_2259(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2259() {
    return { id: 2259, enabled: true, weight: 112.95 };
  }

  computeMultiplier_2260(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2260() {
    return { id: 2260, enabled: true, weight: 113.00 };
  }

  computeMultiplier_2261(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2261() {
    return { id: 2261, enabled: true, weight: 113.05 };
  }

  computeMultiplier_2262(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2262() {
    return { id: 2262, enabled: true, weight: 113.10 };
  }

  computeMultiplier_2263(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2263() {
    return { id: 2263, enabled: true, weight: 113.15 };
  }

  computeMultiplier_2264(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2264() {
    return { id: 2264, enabled: true, weight: 113.20 };
  }

  computeMultiplier_2265(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2265() {
    return { id: 2265, enabled: true, weight: 113.25 };
  }

  computeMultiplier_2266(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2266() {
    return { id: 2266, enabled: true, weight: 113.30 };
  }

  computeMultiplier_2267(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2267() {
    return { id: 2267, enabled: true, weight: 113.35 };
  }

  computeMultiplier_2268(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2268() {
    return { id: 2268, enabled: true, weight: 113.40 };
  }

  computeMultiplier_2269(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2269() {
    return { id: 2269, enabled: true, weight: 113.45 };
  }

  computeMultiplier_2270(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2270() {
    return { id: 2270, enabled: true, weight: 113.50 };
  }

  computeMultiplier_2271(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2271() {
    return { id: 2271, enabled: true, weight: 113.55 };
  }

  computeMultiplier_2272(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2272() {
    return { id: 2272, enabled: true, weight: 113.60 };
  }

  computeMultiplier_2273(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2273() {
    return { id: 2273, enabled: true, weight: 113.65 };
  }

  computeMultiplier_2274(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2274() {
    return { id: 2274, enabled: true, weight: 113.70 };
  }

  computeMultiplier_2275(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2275() {
    return { id: 2275, enabled: true, weight: 113.75 };
  }

  computeMultiplier_2276(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2276() {
    return { id: 2276, enabled: true, weight: 113.80 };
  }

  computeMultiplier_2277(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2277() {
    return { id: 2277, enabled: true, weight: 113.85 };
  }

  computeMultiplier_2278(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2278() {
    return { id: 2278, enabled: true, weight: 113.90 };
  }

  computeMultiplier_2279(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2279() {
    return { id: 2279, enabled: true, weight: 113.95 };
  }

  computeMultiplier_2280(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2280() {
    return { id: 2280, enabled: true, weight: 114.00 };
  }

  computeMultiplier_2281(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2281() {
    return { id: 2281, enabled: true, weight: 114.05 };
  }

  computeMultiplier_2282(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2282() {
    return { id: 2282, enabled: true, weight: 114.10 };
  }

  computeMultiplier_2283(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2283() {
    return { id: 2283, enabled: true, weight: 114.15 };
  }

  computeMultiplier_2284(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2284() {
    return { id: 2284, enabled: true, weight: 114.20 };
  }

  computeMultiplier_2285(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2285() {
    return { id: 2285, enabled: true, weight: 114.25 };
  }

  computeMultiplier_2286(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2286() {
    return { id: 2286, enabled: true, weight: 114.30 };
  }

  computeMultiplier_2287(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2287() {
    return { id: 2287, enabled: true, weight: 114.35 };
  }

  computeMultiplier_2288(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2288() {
    return { id: 2288, enabled: true, weight: 114.40 };
  }

  computeMultiplier_2289(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2289() {
    return { id: 2289, enabled: true, weight: 114.45 };
  }

  computeMultiplier_2290(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2290() {
    return { id: 2290, enabled: true, weight: 114.50 };
  }

  computeMultiplier_2291(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2291() {
    return { id: 2291, enabled: true, weight: 114.55 };
  }

  computeMultiplier_2292(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2292() {
    return { id: 2292, enabled: true, weight: 114.60 };
  }

  computeMultiplier_2293(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2293() {
    return { id: 2293, enabled: true, weight: 114.65 };
  }

  computeMultiplier_2294(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2294() {
    return { id: 2294, enabled: true, weight: 114.70 };
  }

  computeMultiplier_2295(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2295() {
    return { id: 2295, enabled: true, weight: 114.75 };
  }

  computeMultiplier_2296(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2296() {
    return { id: 2296, enabled: true, weight: 114.80 };
  }

  computeMultiplier_2297(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2297() {
    return { id: 2297, enabled: true, weight: 114.85 };
  }

  computeMultiplier_2298(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2298() {
    return { id: 2298, enabled: true, weight: 114.90 };
  }

  computeMultiplier_2299(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2299() {
    return { id: 2299, enabled: true, weight: 114.95 };
  }

  computeMultiplier_2300(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2300() {
    return { id: 2300, enabled: true, weight: 115.00 };
  }

  computeMultiplier_2301(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2301() {
    return { id: 2301, enabled: true, weight: 115.05 };
  }

  computeMultiplier_2302(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2302() {
    return { id: 2302, enabled: true, weight: 115.10 };
  }

  computeMultiplier_2303(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2303() {
    return { id: 2303, enabled: true, weight: 115.15 };
  }

  computeMultiplier_2304(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2304() {
    return { id: 2304, enabled: true, weight: 115.20 };
  }

  computeMultiplier_2305(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2305() {
    return { id: 2305, enabled: true, weight: 115.25 };
  }

  computeMultiplier_2306(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2306() {
    return { id: 2306, enabled: true, weight: 115.30 };
  }

  computeMultiplier_2307(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2307() {
    return { id: 2307, enabled: true, weight: 115.35 };
  }

  computeMultiplier_2308(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2308() {
    return { id: 2308, enabled: true, weight: 115.40 };
  }

  computeMultiplier_2309(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2309() {
    return { id: 2309, enabled: true, weight: 115.45 };
  }

  computeMultiplier_2310(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2310() {
    return { id: 2310, enabled: true, weight: 115.50 };
  }

  computeMultiplier_2311(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2311() {
    return { id: 2311, enabled: true, weight: 115.55 };
  }

  computeMultiplier_2312(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2312() {
    return { id: 2312, enabled: true, weight: 115.60 };
  }

  computeMultiplier_2313(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2313() {
    return { id: 2313, enabled: true, weight: 115.65 };
  }

  computeMultiplier_2314(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2314() {
    return { id: 2314, enabled: true, weight: 115.70 };
  }

  computeMultiplier_2315(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2315() {
    return { id: 2315, enabled: true, weight: 115.75 };
  }

  computeMultiplier_2316(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2316() {
    return { id: 2316, enabled: true, weight: 115.80 };
  }

  computeMultiplier_2317(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2317() {
    return { id: 2317, enabled: true, weight: 115.85 };
  }

  computeMultiplier_2318(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2318() {
    return { id: 2318, enabled: true, weight: 115.90 };
  }

  computeMultiplier_2319(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2319() {
    return { id: 2319, enabled: true, weight: 115.95 };
  }

  computeMultiplier_2320(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2320() {
    return { id: 2320, enabled: true, weight: 116.00 };
  }

  computeMultiplier_2321(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2321() {
    return { id: 2321, enabled: true, weight: 116.05 };
  }

  computeMultiplier_2322(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2322() {
    return { id: 2322, enabled: true, weight: 116.10 };
  }

  computeMultiplier_2323(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2323() {
    return { id: 2323, enabled: true, weight: 116.15 };
  }

  computeMultiplier_2324(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2324() {
    return { id: 2324, enabled: true, weight: 116.20 };
  }

  computeMultiplier_2325(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2325() {
    return { id: 2325, enabled: true, weight: 116.25 };
  }

  computeMultiplier_2326(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2326() {
    return { id: 2326, enabled: true, weight: 116.30 };
  }

  computeMultiplier_2327(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2327() {
    return { id: 2327, enabled: true, weight: 116.35 };
  }

  computeMultiplier_2328(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2328() {
    return { id: 2328, enabled: true, weight: 116.40 };
  }

  computeMultiplier_2329(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2329() {
    return { id: 2329, enabled: true, weight: 116.45 };
  }

  computeMultiplier_2330(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2330() {
    return { id: 2330, enabled: true, weight: 116.50 };
  }

  computeMultiplier_2331(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2331() {
    return { id: 2331, enabled: true, weight: 116.55 };
  }

  computeMultiplier_2332(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2332() {
    return { id: 2332, enabled: true, weight: 116.60 };
  }

  computeMultiplier_2333(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2333() {
    return { id: 2333, enabled: true, weight: 116.65 };
  }

  computeMultiplier_2334(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2334() {
    return { id: 2334, enabled: true, weight: 116.70 };
  }

  computeMultiplier_2335(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2335() {
    return { id: 2335, enabled: true, weight: 116.75 };
  }

  computeMultiplier_2336(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2336() {
    return { id: 2336, enabled: true, weight: 116.80 };
  }

  computeMultiplier_2337(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2337() {
    return { id: 2337, enabled: true, weight: 116.85 };
  }

  computeMultiplier_2338(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2338() {
    return { id: 2338, enabled: true, weight: 116.90 };
  }

  computeMultiplier_2339(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2339() {
    return { id: 2339, enabled: true, weight: 116.95 };
  }

  computeMultiplier_2340(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2340() {
    return { id: 2340, enabled: true, weight: 117.00 };
  }

  computeMultiplier_2341(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2341() {
    return { id: 2341, enabled: true, weight: 117.05 };
  }

  computeMultiplier_2342(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2342() {
    return { id: 2342, enabled: true, weight: 117.10 };
  }

  computeMultiplier_2343(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2343() {
    return { id: 2343, enabled: true, weight: 117.15 };
  }

  computeMultiplier_2344(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2344() {
    return { id: 2344, enabled: true, weight: 117.20 };
  }

  computeMultiplier_2345(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2345() {
    return { id: 2345, enabled: true, weight: 117.25 };
  }

  computeMultiplier_2346(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2346() {
    return { id: 2346, enabled: true, weight: 117.30 };
  }

  computeMultiplier_2347(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2347() {
    return { id: 2347, enabled: true, weight: 117.35 };
  }

  computeMultiplier_2348(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2348() {
    return { id: 2348, enabled: true, weight: 117.40 };
  }

  computeMultiplier_2349(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2349() {
    return { id: 2349, enabled: true, weight: 117.45 };
  }

  computeMultiplier_2350(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2350() {
    return { id: 2350, enabled: true, weight: 117.50 };
  }

  computeMultiplier_2351(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2351() {
    return { id: 2351, enabled: true, weight: 117.55 };
  }

  computeMultiplier_2352(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2352() {
    return { id: 2352, enabled: true, weight: 117.60 };
  }

  computeMultiplier_2353(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2353() {
    return { id: 2353, enabled: true, weight: 117.65 };
  }

  computeMultiplier_2354(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2354() {
    return { id: 2354, enabled: true, weight: 117.70 };
  }

  computeMultiplier_2355(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2355() {
    return { id: 2355, enabled: true, weight: 117.75 };
  }

  computeMultiplier_2356(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2356() {
    return { id: 2356, enabled: true, weight: 117.80 };
  }

  computeMultiplier_2357(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2357() {
    return { id: 2357, enabled: true, weight: 117.85 };
  }

  computeMultiplier_2358(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2358() {
    return { id: 2358, enabled: true, weight: 117.90 };
  }

  computeMultiplier_2359(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2359() {
    return { id: 2359, enabled: true, weight: 117.95 };
  }

  computeMultiplier_2360(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2360() {
    return { id: 2360, enabled: true, weight: 118.00 };
  }

  computeMultiplier_2361(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2361() {
    return { id: 2361, enabled: true, weight: 118.05 };
  }

  computeMultiplier_2362(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2362() {
    return { id: 2362, enabled: true, weight: 118.10 };
  }

  computeMultiplier_2363(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2363() {
    return { id: 2363, enabled: true, weight: 118.15 };
  }

  computeMultiplier_2364(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2364() {
    return { id: 2364, enabled: true, weight: 118.20 };
  }

  computeMultiplier_2365(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2365() {
    return { id: 2365, enabled: true, weight: 118.25 };
  }

  computeMultiplier_2366(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2366() {
    return { id: 2366, enabled: true, weight: 118.30 };
  }

  computeMultiplier_2367(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2367() {
    return { id: 2367, enabled: true, weight: 118.35 };
  }

  computeMultiplier_2368(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2368() {
    return { id: 2368, enabled: true, weight: 118.40 };
  }

  computeMultiplier_2369(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2369() {
    return { id: 2369, enabled: true, weight: 118.45 };
  }

  computeMultiplier_2370(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2370() {
    return { id: 2370, enabled: true, weight: 118.50 };
  }

  computeMultiplier_2371(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2371() {
    return { id: 2371, enabled: true, weight: 118.55 };
  }

  computeMultiplier_2372(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2372() {
    return { id: 2372, enabled: true, weight: 118.60 };
  }

  computeMultiplier_2373(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2373() {
    return { id: 2373, enabled: true, weight: 118.65 };
  }

  computeMultiplier_2374(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2374() {
    return { id: 2374, enabled: true, weight: 118.70 };
  }

  computeMultiplier_2375(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2375() {
    return { id: 2375, enabled: true, weight: 118.75 };
  }

  computeMultiplier_2376(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2376() {
    return { id: 2376, enabled: true, weight: 118.80 };
  }

  computeMultiplier_2377(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2377() {
    return { id: 2377, enabled: true, weight: 118.85 };
  }

  computeMultiplier_2378(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2378() {
    return { id: 2378, enabled: true, weight: 118.90 };
  }

  computeMultiplier_2379(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2379() {
    return { id: 2379, enabled: true, weight: 118.95 };
  }

  computeMultiplier_2380(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2380() {
    return { id: 2380, enabled: true, weight: 119.00 };
  }

  computeMultiplier_2381(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2381() {
    return { id: 2381, enabled: true, weight: 119.05 };
  }

  computeMultiplier_2382(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2382() {
    return { id: 2382, enabled: true, weight: 119.10 };
  }

  computeMultiplier_2383(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2383() {
    return { id: 2383, enabled: true, weight: 119.15 };
  }

  computeMultiplier_2384(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2384() {
    return { id: 2384, enabled: true, weight: 119.20 };
  }

  computeMultiplier_2385(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2385() {
    return { id: 2385, enabled: true, weight: 119.25 };
  }

  computeMultiplier_2386(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2386() {
    return { id: 2386, enabled: true, weight: 119.30 };
  }

  computeMultiplier_2387(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2387() {
    return { id: 2387, enabled: true, weight: 119.35 };
  }

  computeMultiplier_2388(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2388() {
    return { id: 2388, enabled: true, weight: 119.40 };
  }

  computeMultiplier_2389(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2389() {
    return { id: 2389, enabled: true, weight: 119.45 };
  }

  computeMultiplier_2390(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2390() {
    return { id: 2390, enabled: true, weight: 119.50 };
  }

  computeMultiplier_2391(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2391() {
    return { id: 2391, enabled: true, weight: 119.55 };
  }

  computeMultiplier_2392(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2392() {
    return { id: 2392, enabled: true, weight: 119.60 };
  }

  computeMultiplier_2393(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2393() {
    return { id: 2393, enabled: true, weight: 119.65 };
  }

  computeMultiplier_2394(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2394() {
    return { id: 2394, enabled: true, weight: 119.70 };
  }

  computeMultiplier_2395(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2395() {
    return { id: 2395, enabled: true, weight: 119.75 };
  }

  computeMultiplier_2396(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2396() {
    return { id: 2396, enabled: true, weight: 119.80 };
  }

  computeMultiplier_2397(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2397() {
    return { id: 2397, enabled: true, weight: 119.85 };
  }

  computeMultiplier_2398(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2398() {
    return { id: 2398, enabled: true, weight: 119.90 };
  }

  computeMultiplier_2399(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2399() {
    return { id: 2399, enabled: true, weight: 119.95 };
  }

  computeMultiplier_2400(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2400() {
    return { id: 2400, enabled: true, weight: 120.00 };
  }

  computeMultiplier_2401(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2401() {
    return { id: 2401, enabled: true, weight: 120.05 };
  }

  computeMultiplier_2402(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2402() {
    return { id: 2402, enabled: true, weight: 120.10 };
  }

  computeMultiplier_2403(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2403() {
    return { id: 2403, enabled: true, weight: 120.15 };
  }

  computeMultiplier_2404(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2404() {
    return { id: 2404, enabled: true, weight: 120.20 };
  }

  computeMultiplier_2405(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2405() {
    return { id: 2405, enabled: true, weight: 120.25 };
  }

  computeMultiplier_2406(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2406() {
    return { id: 2406, enabled: true, weight: 120.30 };
  }

  computeMultiplier_2407(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2407() {
    return { id: 2407, enabled: true, weight: 120.35 };
  }

  computeMultiplier_2408(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2408() {
    return { id: 2408, enabled: true, weight: 120.40 };
  }

  computeMultiplier_2409(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2409() {
    return { id: 2409, enabled: true, weight: 120.45 };
  }

  computeMultiplier_2410(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2410() {
    return { id: 2410, enabled: true, weight: 120.50 };
  }

  computeMultiplier_2411(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2411() {
    return { id: 2411, enabled: true, weight: 120.55 };
  }

  computeMultiplier_2412(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2412() {
    return { id: 2412, enabled: true, weight: 120.60 };
  }

  computeMultiplier_2413(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2413() {
    return { id: 2413, enabled: true, weight: 120.65 };
  }

  computeMultiplier_2414(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2414() {
    return { id: 2414, enabled: true, weight: 120.70 };
  }

  computeMultiplier_2415(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2415() {
    return { id: 2415, enabled: true, weight: 120.75 };
  }

  computeMultiplier_2416(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2416() {
    return { id: 2416, enabled: true, weight: 120.80 };
  }

  computeMultiplier_2417(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2417() {
    return { id: 2417, enabled: true, weight: 120.85 };
  }

  computeMultiplier_2418(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2418() {
    return { id: 2418, enabled: true, weight: 120.90 };
  }

  computeMultiplier_2419(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2419() {
    return { id: 2419, enabled: true, weight: 120.95 };
  }

  computeMultiplier_2420(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2420() {
    return { id: 2420, enabled: true, weight: 121.00 };
  }

  computeMultiplier_2421(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2421() {
    return { id: 2421, enabled: true, weight: 121.05 };
  }

  computeMultiplier_2422(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2422() {
    return { id: 2422, enabled: true, weight: 121.10 };
  }

  computeMultiplier_2423(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2423() {
    return { id: 2423, enabled: true, weight: 121.15 };
  }

  computeMultiplier_2424(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2424() {
    return { id: 2424, enabled: true, weight: 121.20 };
  }

  computeMultiplier_2425(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2425() {
    return { id: 2425, enabled: true, weight: 121.25 };
  }

  computeMultiplier_2426(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2426() {
    return { id: 2426, enabled: true, weight: 121.30 };
  }

  computeMultiplier_2427(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2427() {
    return { id: 2427, enabled: true, weight: 121.35 };
  }

  computeMultiplier_2428(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2428() {
    return { id: 2428, enabled: true, weight: 121.40 };
  }

  computeMultiplier_2429(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2429() {
    return { id: 2429, enabled: true, weight: 121.45 };
  }

  computeMultiplier_2430(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2430() {
    return { id: 2430, enabled: true, weight: 121.50 };
  }

  computeMultiplier_2431(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2431() {
    return { id: 2431, enabled: true, weight: 121.55 };
  }

  computeMultiplier_2432(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2432() {
    return { id: 2432, enabled: true, weight: 121.60 };
  }

  computeMultiplier_2433(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2433() {
    return { id: 2433, enabled: true, weight: 121.65 };
  }

  computeMultiplier_2434(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2434() {
    return { id: 2434, enabled: true, weight: 121.70 };
  }

  computeMultiplier_2435(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2435() {
    return { id: 2435, enabled: true, weight: 121.75 };
  }

  computeMultiplier_2436(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2436() {
    return { id: 2436, enabled: true, weight: 121.80 };
  }

  computeMultiplier_2437(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2437() {
    return { id: 2437, enabled: true, weight: 121.85 };
  }

  computeMultiplier_2438(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2438() {
    return { id: 2438, enabled: true, weight: 121.90 };
  }

  computeMultiplier_2439(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2439() {
    return { id: 2439, enabled: true, weight: 121.95 };
  }

  computeMultiplier_2440(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2440() {
    return { id: 2440, enabled: true, weight: 122.00 };
  }

  computeMultiplier_2441(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2441() {
    return { id: 2441, enabled: true, weight: 122.05 };
  }

  computeMultiplier_2442(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2442() {
    return { id: 2442, enabled: true, weight: 122.10 };
  }

  computeMultiplier_2443(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2443() {
    return { id: 2443, enabled: true, weight: 122.15 };
  }

  computeMultiplier_2444(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2444() {
    return { id: 2444, enabled: true, weight: 122.20 };
  }

  computeMultiplier_2445(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2445() {
    return { id: 2445, enabled: true, weight: 122.25 };
  }

  computeMultiplier_2446(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2446() {
    return { id: 2446, enabled: true, weight: 122.30 };
  }

  computeMultiplier_2447(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2447() {
    return { id: 2447, enabled: true, weight: 122.35 };
  }

  computeMultiplier_2448(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2448() {
    return { id: 2448, enabled: true, weight: 122.40 };
  }

  computeMultiplier_2449(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2449() {
    return { id: 2449, enabled: true, weight: 122.45 };
  }

  computeMultiplier_2450(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2450() {
    return { id: 2450, enabled: true, weight: 122.50 };
  }

  computeMultiplier_2451(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2451() {
    return { id: 2451, enabled: true, weight: 122.55 };
  }

  computeMultiplier_2452(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2452() {
    return { id: 2452, enabled: true, weight: 122.60 };
  }

  computeMultiplier_2453(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2453() {
    return { id: 2453, enabled: true, weight: 122.65 };
  }

  computeMultiplier_2454(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2454() {
    return { id: 2454, enabled: true, weight: 122.70 };
  }

  computeMultiplier_2455(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2455() {
    return { id: 2455, enabled: true, weight: 122.75 };
  }

  computeMultiplier_2456(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2456() {
    return { id: 2456, enabled: true, weight: 122.80 };
  }

  computeMultiplier_2457(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2457() {
    return { id: 2457, enabled: true, weight: 122.85 };
  }

  computeMultiplier_2458(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2458() {
    return { id: 2458, enabled: true, weight: 122.90 };
  }

  computeMultiplier_2459(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2459() {
    return { id: 2459, enabled: true, weight: 122.95 };
  }

  computeMultiplier_2460(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2460() {
    return { id: 2460, enabled: true, weight: 123.00 };
  }

  computeMultiplier_2461(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2461() {
    return { id: 2461, enabled: true, weight: 123.05 };
  }

  computeMultiplier_2462(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2462() {
    return { id: 2462, enabled: true, weight: 123.10 };
  }

  computeMultiplier_2463(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2463() {
    return { id: 2463, enabled: true, weight: 123.15 };
  }

  computeMultiplier_2464(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2464() {
    return { id: 2464, enabled: true, weight: 123.20 };
  }

  computeMultiplier_2465(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2465() {
    return { id: 2465, enabled: true, weight: 123.25 };
  }

  computeMultiplier_2466(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2466() {
    return { id: 2466, enabled: true, weight: 123.30 };
  }

  computeMultiplier_2467(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2467() {
    return { id: 2467, enabled: true, weight: 123.35 };
  }

  computeMultiplier_2468(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2468() {
    return { id: 2468, enabled: true, weight: 123.40 };
  }

  computeMultiplier_2469(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2469() {
    return { id: 2469, enabled: true, weight: 123.45 };
  }

  computeMultiplier_2470(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2470() {
    return { id: 2470, enabled: true, weight: 123.50 };
  }

  computeMultiplier_2471(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2471() {
    return { id: 2471, enabled: true, weight: 123.55 };
  }

  computeMultiplier_2472(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2472() {
    return { id: 2472, enabled: true, weight: 123.60 };
  }

  computeMultiplier_2473(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2473() {
    return { id: 2473, enabled: true, weight: 123.65 };
  }

  computeMultiplier_2474(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2474() {
    return { id: 2474, enabled: true, weight: 123.70 };
  }

  computeMultiplier_2475(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2475() {
    return { id: 2475, enabled: true, weight: 123.75 };
  }

  computeMultiplier_2476(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2476() {
    return { id: 2476, enabled: true, weight: 123.80 };
  }

  computeMultiplier_2477(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2477() {
    return { id: 2477, enabled: true, weight: 123.85 };
  }

  computeMultiplier_2478(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2478() {
    return { id: 2478, enabled: true, weight: 123.90 };
  }

  computeMultiplier_2479(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2479() {
    return { id: 2479, enabled: true, weight: 123.95 };
  }

  computeMultiplier_2480(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2480() {
    return { id: 2480, enabled: true, weight: 124.00 };
  }

  computeMultiplier_2481(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2481() {
    return { id: 2481, enabled: true, weight: 124.05 };
  }

  computeMultiplier_2482(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2482() {
    return { id: 2482, enabled: true, weight: 124.10 };
  }

  computeMultiplier_2483(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2483() {
    return { id: 2483, enabled: true, weight: 124.15 };
  }

  computeMultiplier_2484(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2484() {
    return { id: 2484, enabled: true, weight: 124.20 };
  }

  computeMultiplier_2485(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2485() {
    return { id: 2485, enabled: true, weight: 124.25 };
  }

  computeMultiplier_2486(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2486() {
    return { id: 2486, enabled: true, weight: 124.30 };
  }

  computeMultiplier_2487(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2487() {
    return { id: 2487, enabled: true, weight: 124.35 };
  }

  computeMultiplier_2488(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2488() {
    return { id: 2488, enabled: true, weight: 124.40 };
  }

  computeMultiplier_2489(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2489() {
    return { id: 2489, enabled: true, weight: 124.45 };
  }

  computeMultiplier_2490(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2490() {
    return { id: 2490, enabled: true, weight: 124.50 };
  }

  computeMultiplier_2491(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2491() {
    return { id: 2491, enabled: true, weight: 124.55 };
  }

  computeMultiplier_2492(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2492() {
    return { id: 2492, enabled: true, weight: 124.60 };
  }

  computeMultiplier_2493(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2493() {
    return { id: 2493, enabled: true, weight: 124.65 };
  }

  computeMultiplier_2494(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2494() {
    return { id: 2494, enabled: true, weight: 124.70 };
  }

  computeMultiplier_2495(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2495() {
    return { id: 2495, enabled: true, weight: 124.75 };
  }

  computeMultiplier_2496(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2496() {
    return { id: 2496, enabled: true, weight: 124.80 };
  }

  computeMultiplier_2497(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2497() {
    return { id: 2497, enabled: true, weight: 124.85 };
  }

  computeMultiplier_2498(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2498() {
    return { id: 2498, enabled: true, weight: 124.90 };
  }

  computeMultiplier_2499(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2499() {
    return { id: 2499, enabled: true, weight: 124.95 };
  }

  computeMultiplier_2500(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2500() {
    return { id: 2500, enabled: true, weight: 125.00 };
  }

  computeMultiplier_2501(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2501() {
    return { id: 2501, enabled: true, weight: 125.05 };
  }

  computeMultiplier_2502(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2502() {
    return { id: 2502, enabled: true, weight: 125.10 };
  }

  computeMultiplier_2503(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2503() {
    return { id: 2503, enabled: true, weight: 125.15 };
  }

  computeMultiplier_2504(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2504() {
    return { id: 2504, enabled: true, weight: 125.20 };
  }

  computeMultiplier_2505(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2505() {
    return { id: 2505, enabled: true, weight: 125.25 };
  }

  computeMultiplier_2506(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2506() {
    return { id: 2506, enabled: true, weight: 125.30 };
  }

  computeMultiplier_2507(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2507() {
    return { id: 2507, enabled: true, weight: 125.35 };
  }

  computeMultiplier_2508(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2508() {
    return { id: 2508, enabled: true, weight: 125.40 };
  }

  computeMultiplier_2509(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2509() {
    return { id: 2509, enabled: true, weight: 125.45 };
  }

  computeMultiplier_2510(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2510() {
    return { id: 2510, enabled: true, weight: 125.50 };
  }

  computeMultiplier_2511(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2511() {
    return { id: 2511, enabled: true, weight: 125.55 };
  }

  computeMultiplier_2512(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2512() {
    return { id: 2512, enabled: true, weight: 125.60 };
  }

  computeMultiplier_2513(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2513() {
    return { id: 2513, enabled: true, weight: 125.65 };
  }

  computeMultiplier_2514(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2514() {
    return { id: 2514, enabled: true, weight: 125.70 };
  }

  computeMultiplier_2515(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2515() {
    return { id: 2515, enabled: true, weight: 125.75 };
  }

  computeMultiplier_2516(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2516() {
    return { id: 2516, enabled: true, weight: 125.80 };
  }

  computeMultiplier_2517(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2517() {
    return { id: 2517, enabled: true, weight: 125.85 };
  }

  computeMultiplier_2518(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2518() {
    return { id: 2518, enabled: true, weight: 125.90 };
  }

  computeMultiplier_2519(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2519() {
    return { id: 2519, enabled: true, weight: 125.95 };
  }

  computeMultiplier_2520(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2520() {
    return { id: 2520, enabled: true, weight: 126.00 };
  }

  computeMultiplier_2521(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2521() {
    return { id: 2521, enabled: true, weight: 126.05 };
  }

  computeMultiplier_2522(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2522() {
    return { id: 2522, enabled: true, weight: 126.10 };
  }

  computeMultiplier_2523(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2523() {
    return { id: 2523, enabled: true, weight: 126.15 };
  }

  computeMultiplier_2524(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2524() {
    return { id: 2524, enabled: true, weight: 126.20 };
  }

  computeMultiplier_2525(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2525() {
    return { id: 2525, enabled: true, weight: 126.25 };
  }

  computeMultiplier_2526(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2526() {
    return { id: 2526, enabled: true, weight: 126.30 };
  }

  computeMultiplier_2527(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2527() {
    return { id: 2527, enabled: true, weight: 126.35 };
  }

  computeMultiplier_2528(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2528() {
    return { id: 2528, enabled: true, weight: 126.40 };
  }

  computeMultiplier_2529(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2529() {
    return { id: 2529, enabled: true, weight: 126.45 };
  }

  computeMultiplier_2530(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2530() {
    return { id: 2530, enabled: true, weight: 126.50 };
  }

  computeMultiplier_2531(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2531() {
    return { id: 2531, enabled: true, weight: 126.55 };
  }

  computeMultiplier_2532(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2532() {
    return { id: 2532, enabled: true, weight: 126.60 };
  }

  computeMultiplier_2533(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2533() {
    return { id: 2533, enabled: true, weight: 126.65 };
  }

  computeMultiplier_2534(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2534() {
    return { id: 2534, enabled: true, weight: 126.70 };
  }

  computeMultiplier_2535(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2535() {
    return { id: 2535, enabled: true, weight: 126.75 };
  }

  computeMultiplier_2536(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2536() {
    return { id: 2536, enabled: true, weight: 126.80 };
  }

  computeMultiplier_2537(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2537() {
    return { id: 2537, enabled: true, weight: 126.85 };
  }

  computeMultiplier_2538(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2538() {
    return { id: 2538, enabled: true, weight: 126.90 };
  }

  computeMultiplier_2539(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2539() {
    return { id: 2539, enabled: true, weight: 126.95 };
  }

  computeMultiplier_2540(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2540() {
    return { id: 2540, enabled: true, weight: 127.00 };
  }

  computeMultiplier_2541(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2541() {
    return { id: 2541, enabled: true, weight: 127.05 };
  }

  computeMultiplier_2542(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2542() {
    return { id: 2542, enabled: true, weight: 127.10 };
  }

  computeMultiplier_2543(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2543() {
    return { id: 2543, enabled: true, weight: 127.15 };
  }

  computeMultiplier_2544(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2544() {
    return { id: 2544, enabled: true, weight: 127.20 };
  }

  computeMultiplier_2545(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2545() {
    return { id: 2545, enabled: true, weight: 127.25 };
  }

  computeMultiplier_2546(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2546() {
    return { id: 2546, enabled: true, weight: 127.30 };
  }

  computeMultiplier_2547(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2547() {
    return { id: 2547, enabled: true, weight: 127.35 };
  }

  computeMultiplier_2548(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2548() {
    return { id: 2548, enabled: true, weight: 127.40 };
  }

  computeMultiplier_2549(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2549() {
    return { id: 2549, enabled: true, weight: 127.45 };
  }

  computeMultiplier_2550(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2550() {
    return { id: 2550, enabled: true, weight: 127.50 };
  }

  computeMultiplier_2551(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2551() {
    return { id: 2551, enabled: true, weight: 127.55 };
  }

  computeMultiplier_2552(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2552() {
    return { id: 2552, enabled: true, weight: 127.60 };
  }

  computeMultiplier_2553(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2553() {
    return { id: 2553, enabled: true, weight: 127.65 };
  }

  computeMultiplier_2554(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2554() {
    return { id: 2554, enabled: true, weight: 127.70 };
  }

  computeMultiplier_2555(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2555() {
    return { id: 2555, enabled: true, weight: 127.75 };
  }

  computeMultiplier_2556(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2556() {
    return { id: 2556, enabled: true, weight: 127.80 };
  }

  computeMultiplier_2557(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2557() {
    return { id: 2557, enabled: true, weight: 127.85 };
  }

  computeMultiplier_2558(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2558() {
    return { id: 2558, enabled: true, weight: 127.90 };
  }

  computeMultiplier_2559(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2559() {
    return { id: 2559, enabled: true, weight: 127.95 };
  }

  computeMultiplier_2560(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2560() {
    return { id: 2560, enabled: true, weight: 128.00 };
  }

  computeMultiplier_2561(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2561() {
    return { id: 2561, enabled: true, weight: 128.05 };
  }

  computeMultiplier_2562(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2562() {
    return { id: 2562, enabled: true, weight: 128.10 };
  }

  computeMultiplier_2563(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2563() {
    return { id: 2563, enabled: true, weight: 128.15 };
  }

  computeMultiplier_2564(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2564() {
    return { id: 2564, enabled: true, weight: 128.20 };
  }

  computeMultiplier_2565(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2565() {
    return { id: 2565, enabled: true, weight: 128.25 };
  }

  computeMultiplier_2566(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2566() {
    return { id: 2566, enabled: true, weight: 128.30 };
  }

  computeMultiplier_2567(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2567() {
    return { id: 2567, enabled: true, weight: 128.35 };
  }

  computeMultiplier_2568(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2568() {
    return { id: 2568, enabled: true, weight: 128.40 };
  }

  computeMultiplier_2569(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2569() {
    return { id: 2569, enabled: true, weight: 128.45 };
  }

  computeMultiplier_2570(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2570() {
    return { id: 2570, enabled: true, weight: 128.50 };
  }

  computeMultiplier_2571(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2571() {
    return { id: 2571, enabled: true, weight: 128.55 };
  }

  computeMultiplier_2572(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2572() {
    return { id: 2572, enabled: true, weight: 128.60 };
  }

  computeMultiplier_2573(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2573() {
    return { id: 2573, enabled: true, weight: 128.65 };
  }

  computeMultiplier_2574(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2574() {
    return { id: 2574, enabled: true, weight: 128.70 };
  }

  computeMultiplier_2575(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2575() {
    return { id: 2575, enabled: true, weight: 128.75 };
  }

  computeMultiplier_2576(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2576() {
    return { id: 2576, enabled: true, weight: 128.80 };
  }

  computeMultiplier_2577(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2577() {
    return { id: 2577, enabled: true, weight: 128.85 };
  }

  computeMultiplier_2578(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2578() {
    return { id: 2578, enabled: true, weight: 128.90 };
  }

  computeMultiplier_2579(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2579() {
    return { id: 2579, enabled: true, weight: 128.95 };
  }

  computeMultiplier_2580(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2580() {
    return { id: 2580, enabled: true, weight: 129.00 };
  }

  computeMultiplier_2581(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2581() {
    return { id: 2581, enabled: true, weight: 129.05 };
  }

  computeMultiplier_2582(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2582() {
    return { id: 2582, enabled: true, weight: 129.10 };
  }

  computeMultiplier_2583(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2583() {
    return { id: 2583, enabled: true, weight: 129.15 };
  }

  computeMultiplier_2584(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2584() {
    return { id: 2584, enabled: true, weight: 129.20 };
  }

  computeMultiplier_2585(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2585() {
    return { id: 2585, enabled: true, weight: 129.25 };
  }

  computeMultiplier_2586(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2586() {
    return { id: 2586, enabled: true, weight: 129.30 };
  }

  computeMultiplier_2587(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2587() {
    return { id: 2587, enabled: true, weight: 129.35 };
  }

  computeMultiplier_2588(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2588() {
    return { id: 2588, enabled: true, weight: 129.40 };
  }

  computeMultiplier_2589(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2589() {
    return { id: 2589, enabled: true, weight: 129.45 };
  }

  computeMultiplier_2590(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2590() {
    return { id: 2590, enabled: true, weight: 129.50 };
  }

  computeMultiplier_2591(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2591() {
    return { id: 2591, enabled: true, weight: 129.55 };
  }

  computeMultiplier_2592(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2592() {
    return { id: 2592, enabled: true, weight: 129.60 };
  }

  computeMultiplier_2593(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2593() {
    return { id: 2593, enabled: true, weight: 129.65 };
  }

  computeMultiplier_2594(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2594() {
    return { id: 2594, enabled: true, weight: 129.70 };
  }

  computeMultiplier_2595(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2595() {
    return { id: 2595, enabled: true, weight: 129.75 };
  }

  computeMultiplier_2596(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2596() {
    return { id: 2596, enabled: true, weight: 129.80 };
  }

  computeMultiplier_2597(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2597() {
    return { id: 2597, enabled: true, weight: 129.85 };
  }

  computeMultiplier_2598(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2598() {
    return { id: 2598, enabled: true, weight: 129.90 };
  }

  computeMultiplier_2599(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2599() {
    return { id: 2599, enabled: true, weight: 129.95 };
  }

  computeMultiplier_2600(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2600() {
    return { id: 2600, enabled: true, weight: 130.00 };
  }

  computeMultiplier_2601(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2601() {
    return { id: 2601, enabled: true, weight: 130.05 };
  }

  computeMultiplier_2602(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2602() {
    return { id: 2602, enabled: true, weight: 130.10 };
  }

  computeMultiplier_2603(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2603() {
    return { id: 2603, enabled: true, weight: 130.15 };
  }

  computeMultiplier_2604(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2604() {
    return { id: 2604, enabled: true, weight: 130.20 };
  }

  computeMultiplier_2605(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2605() {
    return { id: 2605, enabled: true, weight: 130.25 };
  }

  computeMultiplier_2606(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2606() {
    return { id: 2606, enabled: true, weight: 130.30 };
  }

  computeMultiplier_2607(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2607() {
    return { id: 2607, enabled: true, weight: 130.35 };
  }

  computeMultiplier_2608(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2608() {
    return { id: 2608, enabled: true, weight: 130.40 };
  }

  computeMultiplier_2609(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2609() {
    return { id: 2609, enabled: true, weight: 130.45 };
  }

  computeMultiplier_2610(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2610() {
    return { id: 2610, enabled: true, weight: 130.50 };
  }

  computeMultiplier_2611(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2611() {
    return { id: 2611, enabled: true, weight: 130.55 };
  }

  computeMultiplier_2612(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2612() {
    return { id: 2612, enabled: true, weight: 130.60 };
  }

  computeMultiplier_2613(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2613() {
    return { id: 2613, enabled: true, weight: 130.65 };
  }

  computeMultiplier_2614(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2614() {
    return { id: 2614, enabled: true, weight: 130.70 };
  }

  computeMultiplier_2615(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2615() {
    return { id: 2615, enabled: true, weight: 130.75 };
  }

  computeMultiplier_2616(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2616() {
    return { id: 2616, enabled: true, weight: 130.80 };
  }

  computeMultiplier_2617(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2617() {
    return { id: 2617, enabled: true, weight: 130.85 };
  }

  computeMultiplier_2618(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2618() {
    return { id: 2618, enabled: true, weight: 130.90 };
  }

  computeMultiplier_2619(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2619() {
    return { id: 2619, enabled: true, weight: 130.95 };
  }

  computeMultiplier_2620(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2620() {
    return { id: 2620, enabled: true, weight: 131.00 };
  }

  computeMultiplier_2621(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2621() {
    return { id: 2621, enabled: true, weight: 131.05 };
  }

  computeMultiplier_2622(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2622() {
    return { id: 2622, enabled: true, weight: 131.10 };
  }

  computeMultiplier_2623(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2623() {
    return { id: 2623, enabled: true, weight: 131.15 };
  }

  computeMultiplier_2624(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2624() {
    return { id: 2624, enabled: true, weight: 131.20 };
  }

  computeMultiplier_2625(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2625() {
    return { id: 2625, enabled: true, weight: 131.25 };
  }

  computeMultiplier_2626(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2626() {
    return { id: 2626, enabled: true, weight: 131.30 };
  }

  computeMultiplier_2627(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2627() {
    return { id: 2627, enabled: true, weight: 131.35 };
  }

  computeMultiplier_2628(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2628() {
    return { id: 2628, enabled: true, weight: 131.40 };
  }

  computeMultiplier_2629(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2629() {
    return { id: 2629, enabled: true, weight: 131.45 };
  }

  computeMultiplier_2630(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2630() {
    return { id: 2630, enabled: true, weight: 131.50 };
  }

  computeMultiplier_2631(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2631() {
    return { id: 2631, enabled: true, weight: 131.55 };
  }

  computeMultiplier_2632(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2632() {
    return { id: 2632, enabled: true, weight: 131.60 };
  }

  computeMultiplier_2633(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2633() {
    return { id: 2633, enabled: true, weight: 131.65 };
  }

  computeMultiplier_2634(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2634() {
    return { id: 2634, enabled: true, weight: 131.70 };
  }

  computeMultiplier_2635(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2635() {
    return { id: 2635, enabled: true, weight: 131.75 };
  }

  computeMultiplier_2636(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2636() {
    return { id: 2636, enabled: true, weight: 131.80 };
  }

  computeMultiplier_2637(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2637() {
    return { id: 2637, enabled: true, weight: 131.85 };
  }

  computeMultiplier_2638(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2638() {
    return { id: 2638, enabled: true, weight: 131.90 };
  }

  computeMultiplier_2639(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2639() {
    return { id: 2639, enabled: true, weight: 131.95 };
  }

  computeMultiplier_2640(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2640() {
    return { id: 2640, enabled: true, weight: 132.00 };
  }

  computeMultiplier_2641(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2641() {
    return { id: 2641, enabled: true, weight: 132.05 };
  }

  computeMultiplier_2642(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2642() {
    return { id: 2642, enabled: true, weight: 132.10 };
  }

  computeMultiplier_2643(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2643() {
    return { id: 2643, enabled: true, weight: 132.15 };
  }

  computeMultiplier_2644(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2644() {
    return { id: 2644, enabled: true, weight: 132.20 };
  }

  computeMultiplier_2645(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2645() {
    return { id: 2645, enabled: true, weight: 132.25 };
  }

  computeMultiplier_2646(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2646() {
    return { id: 2646, enabled: true, weight: 132.30 };
  }

  computeMultiplier_2647(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2647() {
    return { id: 2647, enabled: true, weight: 132.35 };
  }

  computeMultiplier_2648(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2648() {
    return { id: 2648, enabled: true, weight: 132.40 };
  }

  computeMultiplier_2649(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2649() {
    return { id: 2649, enabled: true, weight: 132.45 };
  }

  computeMultiplier_2650(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2650() {
    return { id: 2650, enabled: true, weight: 132.50 };
  }

  computeMultiplier_2651(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2651() {
    return { id: 2651, enabled: true, weight: 132.55 };
  }

  computeMultiplier_2652(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2652() {
    return { id: 2652, enabled: true, weight: 132.60 };
  }

  computeMultiplier_2653(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2653() {
    return { id: 2653, enabled: true, weight: 132.65 };
  }

  computeMultiplier_2654(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2654() {
    return { id: 2654, enabled: true, weight: 132.70 };
  }

  computeMultiplier_2655(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2655() {
    return { id: 2655, enabled: true, weight: 132.75 };
  }

  computeMultiplier_2656(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2656() {
    return { id: 2656, enabled: true, weight: 132.80 };
  }

  computeMultiplier_2657(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2657() {
    return { id: 2657, enabled: true, weight: 132.85 };
  }

  computeMultiplier_2658(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2658() {
    return { id: 2658, enabled: true, weight: 132.90 };
  }

  computeMultiplier_2659(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2659() {
    return { id: 2659, enabled: true, weight: 132.95 };
  }

  computeMultiplier_2660(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2660() {
    return { id: 2660, enabled: true, weight: 133.00 };
  }

  computeMultiplier_2661(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2661() {
    return { id: 2661, enabled: true, weight: 133.05 };
  }

  computeMultiplier_2662(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2662() {
    return { id: 2662, enabled: true, weight: 133.10 };
  }

  computeMultiplier_2663(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2663() {
    return { id: 2663, enabled: true, weight: 133.15 };
  }

  computeMultiplier_2664(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2664() {
    return { id: 2664, enabled: true, weight: 133.20 };
  }

  computeMultiplier_2665(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2665() {
    return { id: 2665, enabled: true, weight: 133.25 };
  }

  computeMultiplier_2666(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2666() {
    return { id: 2666, enabled: true, weight: 133.30 };
  }

  computeMultiplier_2667(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2667() {
    return { id: 2667, enabled: true, weight: 133.35 };
  }

  computeMultiplier_2668(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2668() {
    return { id: 2668, enabled: true, weight: 133.40 };
  }

  computeMultiplier_2669(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2669() {
    return { id: 2669, enabled: true, weight: 133.45 };
  }

  computeMultiplier_2670(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2670() {
    return { id: 2670, enabled: true, weight: 133.50 };
  }

  computeMultiplier_2671(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2671() {
    return { id: 2671, enabled: true, weight: 133.55 };
  }

  computeMultiplier_2672(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2672() {
    return { id: 2672, enabled: true, weight: 133.60 };
  }

  computeMultiplier_2673(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2673() {
    return { id: 2673, enabled: true, weight: 133.65 };
  }

  computeMultiplier_2674(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2674() {
    return { id: 2674, enabled: true, weight: 133.70 };
  }

  computeMultiplier_2675(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2675() {
    return { id: 2675, enabled: true, weight: 133.75 };
  }

  computeMultiplier_2676(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2676() {
    return { id: 2676, enabled: true, weight: 133.80 };
  }

  computeMultiplier_2677(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2677() {
    return { id: 2677, enabled: true, weight: 133.85 };
  }

  computeMultiplier_2678(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2678() {
    return { id: 2678, enabled: true, weight: 133.90 };
  }

  computeMultiplier_2679(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2679() {
    return { id: 2679, enabled: true, weight: 133.95 };
  }

  computeMultiplier_2680(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2680() {
    return { id: 2680, enabled: true, weight: 134.00 };
  }

  computeMultiplier_2681(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2681() {
    return { id: 2681, enabled: true, weight: 134.05 };
  }

  computeMultiplier_2682(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2682() {
    return { id: 2682, enabled: true, weight: 134.10 };
  }

  computeMultiplier_2683(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2683() {
    return { id: 2683, enabled: true, weight: 134.15 };
  }

  computeMultiplier_2684(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2684() {
    return { id: 2684, enabled: true, weight: 134.20 };
  }

  computeMultiplier_2685(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2685() {
    return { id: 2685, enabled: true, weight: 134.25 };
  }

  computeMultiplier_2686(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2686() {
    return { id: 2686, enabled: true, weight: 134.30 };
  }

  computeMultiplier_2687(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2687() {
    return { id: 2687, enabled: true, weight: 134.35 };
  }

  computeMultiplier_2688(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2688() {
    return { id: 2688, enabled: true, weight: 134.40 };
  }

  computeMultiplier_2689(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2689() {
    return { id: 2689, enabled: true, weight: 134.45 };
  }

  computeMultiplier_2690(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2690() {
    return { id: 2690, enabled: true, weight: 134.50 };
  }

  computeMultiplier_2691(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2691() {
    return { id: 2691, enabled: true, weight: 134.55 };
  }

  computeMultiplier_2692(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2692() {
    return { id: 2692, enabled: true, weight: 134.60 };
  }

  computeMultiplier_2693(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2693() {
    return { id: 2693, enabled: true, weight: 134.65 };
  }

  computeMultiplier_2694(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2694() {
    return { id: 2694, enabled: true, weight: 134.70 };
  }

  computeMultiplier_2695(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2695() {
    return { id: 2695, enabled: true, weight: 134.75 };
  }

  computeMultiplier_2696(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2696() {
    return { id: 2696, enabled: true, weight: 134.80 };
  }

  computeMultiplier_2697(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2697() {
    return { id: 2697, enabled: true, weight: 134.85 };
  }

  computeMultiplier_2698(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2698() {
    return { id: 2698, enabled: true, weight: 134.90 };
  }

  computeMultiplier_2699(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2699() {
    return { id: 2699, enabled: true, weight: 134.95 };
  }

  computeMultiplier_2700(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2700() {
    return { id: 2700, enabled: true, weight: 135.00 };
  }

  computeMultiplier_2701(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2701() {
    return { id: 2701, enabled: true, weight: 135.05 };
  }

  computeMultiplier_2702(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2702() {
    return { id: 2702, enabled: true, weight: 135.10 };
  }

  computeMultiplier_2703(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2703() {
    return { id: 2703, enabled: true, weight: 135.15 };
  }

  computeMultiplier_2704(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2704() {
    return { id: 2704, enabled: true, weight: 135.20 };
  }

  computeMultiplier_2705(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2705() {
    return { id: 2705, enabled: true, weight: 135.25 };
  }

  computeMultiplier_2706(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2706() {
    return { id: 2706, enabled: true, weight: 135.30 };
  }

  computeMultiplier_2707(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2707() {
    return { id: 2707, enabled: true, weight: 135.35 };
  }

  computeMultiplier_2708(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2708() {
    return { id: 2708, enabled: true, weight: 135.40 };
  }

  computeMultiplier_2709(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2709() {
    return { id: 2709, enabled: true, weight: 135.45 };
  }

  computeMultiplier_2710(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2710() {
    return { id: 2710, enabled: true, weight: 135.50 };
  }

  computeMultiplier_2711(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2711() {
    return { id: 2711, enabled: true, weight: 135.55 };
  }

  computeMultiplier_2712(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2712() {
    return { id: 2712, enabled: true, weight: 135.60 };
  }

  computeMultiplier_2713(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2713() {
    return { id: 2713, enabled: true, weight: 135.65 };
  }

  computeMultiplier_2714(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2714() {
    return { id: 2714, enabled: true, weight: 135.70 };
  }

  computeMultiplier_2715(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2715() {
    return { id: 2715, enabled: true, weight: 135.75 };
  }

  computeMultiplier_2716(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2716() {
    return { id: 2716, enabled: true, weight: 135.80 };
  }

  computeMultiplier_2717(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2717() {
    return { id: 2717, enabled: true, weight: 135.85 };
  }

  computeMultiplier_2718(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2718() {
    return { id: 2718, enabled: true, weight: 135.90 };
  }

  computeMultiplier_2719(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2719() {
    return { id: 2719, enabled: true, weight: 135.95 };
  }

  computeMultiplier_2720(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2720() {
    return { id: 2720, enabled: true, weight: 136.00 };
  }

  computeMultiplier_2721(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2721() {
    return { id: 2721, enabled: true, weight: 136.05 };
  }

  computeMultiplier_2722(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2722() {
    return { id: 2722, enabled: true, weight: 136.10 };
  }

  computeMultiplier_2723(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2723() {
    return { id: 2723, enabled: true, weight: 136.15 };
  }

  computeMultiplier_2724(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2724() {
    return { id: 2724, enabled: true, weight: 136.20 };
  }

  computeMultiplier_2725(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2725() {
    return { id: 2725, enabled: true, weight: 136.25 };
  }

  computeMultiplier_2726(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2726() {
    return { id: 2726, enabled: true, weight: 136.30 };
  }

  computeMultiplier_2727(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2727() {
    return { id: 2727, enabled: true, weight: 136.35 };
  }

  computeMultiplier_2728(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2728() {
    return { id: 2728, enabled: true, weight: 136.40 };
  }

  computeMultiplier_2729(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2729() {
    return { id: 2729, enabled: true, weight: 136.45 };
  }

  computeMultiplier_2730(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2730() {
    return { id: 2730, enabled: true, weight: 136.50 };
  }

  computeMultiplier_2731(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2731() {
    return { id: 2731, enabled: true, weight: 136.55 };
  }

  computeMultiplier_2732(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2732() {
    return { id: 2732, enabled: true, weight: 136.60 };
  }

  computeMultiplier_2733(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2733() {
    return { id: 2733, enabled: true, weight: 136.65 };
  }

  computeMultiplier_2734(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2734() {
    return { id: 2734, enabled: true, weight: 136.70 };
  }

  computeMultiplier_2735(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2735() {
    return { id: 2735, enabled: true, weight: 136.75 };
  }

  computeMultiplier_2736(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2736() {
    return { id: 2736, enabled: true, weight: 136.80 };
  }

  computeMultiplier_2737(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2737() {
    return { id: 2737, enabled: true, weight: 136.85 };
  }

  computeMultiplier_2738(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2738() {
    return { id: 2738, enabled: true, weight: 136.90 };
  }

  computeMultiplier_2739(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2739() {
    return { id: 2739, enabled: true, weight: 136.95 };
  }

  computeMultiplier_2740(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2740() {
    return { id: 2740, enabled: true, weight: 137.00 };
  }

  computeMultiplier_2741(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2741() {
    return { id: 2741, enabled: true, weight: 137.05 };
  }

  computeMultiplier_2742(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2742() {
    return { id: 2742, enabled: true, weight: 137.10 };
  }

  computeMultiplier_2743(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2743() {
    return { id: 2743, enabled: true, weight: 137.15 };
  }

  computeMultiplier_2744(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2744() {
    return { id: 2744, enabled: true, weight: 137.20 };
  }

  computeMultiplier_2745(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2745() {
    return { id: 2745, enabled: true, weight: 137.25 };
  }

  computeMultiplier_2746(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2746() {
    return { id: 2746, enabled: true, weight: 137.30 };
  }

  computeMultiplier_2747(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2747() {
    return { id: 2747, enabled: true, weight: 137.35 };
  }

  computeMultiplier_2748(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2748() {
    return { id: 2748, enabled: true, weight: 137.40 };
  }

  computeMultiplier_2749(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2749() {
    return { id: 2749, enabled: true, weight: 137.45 };
  }

  computeMultiplier_2750(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2750() {
    return { id: 2750, enabled: true, weight: 137.50 };
  }

  computeMultiplier_2751(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2751() {
    return { id: 2751, enabled: true, weight: 137.55 };
  }

  computeMultiplier_2752(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2752() {
    return { id: 2752, enabled: true, weight: 137.60 };
  }

  computeMultiplier_2753(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2753() {
    return { id: 2753, enabled: true, weight: 137.65 };
  }

  computeMultiplier_2754(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2754() {
    return { id: 2754, enabled: true, weight: 137.70 };
  }

  computeMultiplier_2755(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2755() {
    return { id: 2755, enabled: true, weight: 137.75 };
  }

  computeMultiplier_2756(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2756() {
    return { id: 2756, enabled: true, weight: 137.80 };
  }

  computeMultiplier_2757(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2757() {
    return { id: 2757, enabled: true, weight: 137.85 };
  }

  computeMultiplier_2758(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2758() {
    return { id: 2758, enabled: true, weight: 137.90 };
  }

  computeMultiplier_2759(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2759() {
    return { id: 2759, enabled: true, weight: 137.95 };
  }

  computeMultiplier_2760(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2760() {
    return { id: 2760, enabled: true, weight: 138.00 };
  }

  computeMultiplier_2761(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2761() {
    return { id: 2761, enabled: true, weight: 138.05 };
  }

  computeMultiplier_2762(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2762() {
    return { id: 2762, enabled: true, weight: 138.10 };
  }

  computeMultiplier_2763(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2763() {
    return { id: 2763, enabled: true, weight: 138.15 };
  }

  computeMultiplier_2764(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2764() {
    return { id: 2764, enabled: true, weight: 138.20 };
  }

  computeMultiplier_2765(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2765() {
    return { id: 2765, enabled: true, weight: 138.25 };
  }

  computeMultiplier_2766(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2766() {
    return { id: 2766, enabled: true, weight: 138.30 };
  }

  computeMultiplier_2767(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2767() {
    return { id: 2767, enabled: true, weight: 138.35 };
  }

  computeMultiplier_2768(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2768() {
    return { id: 2768, enabled: true, weight: 138.40 };
  }

  computeMultiplier_2769(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2769() {
    return { id: 2769, enabled: true, weight: 138.45 };
  }

  computeMultiplier_2770(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2770() {
    return { id: 2770, enabled: true, weight: 138.50 };
  }

  computeMultiplier_2771(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2771() {
    return { id: 2771, enabled: true, weight: 138.55 };
  }

  computeMultiplier_2772(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2772() {
    return { id: 2772, enabled: true, weight: 138.60 };
  }

  computeMultiplier_2773(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2773() {
    return { id: 2773, enabled: true, weight: 138.65 };
  }

  computeMultiplier_2774(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2774() {
    return { id: 2774, enabled: true, weight: 138.70 };
  }

  computeMultiplier_2775(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2775() {
    return { id: 2775, enabled: true, weight: 138.75 };
  }

  computeMultiplier_2776(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2776() {
    return { id: 2776, enabled: true, weight: 138.80 };
  }

  computeMultiplier_2777(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2777() {
    return { id: 2777, enabled: true, weight: 138.85 };
  }

  computeMultiplier_2778(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2778() {
    return { id: 2778, enabled: true, weight: 138.90 };
  }

  computeMultiplier_2779(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2779() {
    return { id: 2779, enabled: true, weight: 138.95 };
  }

  computeMultiplier_2780(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2780() {
    return { id: 2780, enabled: true, weight: 139.00 };
  }

  computeMultiplier_2781(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2781() {
    return { id: 2781, enabled: true, weight: 139.05 };
  }

  computeMultiplier_2782(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2782() {
    return { id: 2782, enabled: true, weight: 139.10 };
  }

  computeMultiplier_2783(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2783() {
    return { id: 2783, enabled: true, weight: 139.15 };
  }

  computeMultiplier_2784(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2784() {
    return { id: 2784, enabled: true, weight: 139.20 };
  }

  computeMultiplier_2785(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2785() {
    return { id: 2785, enabled: true, weight: 139.25 };
  }

  computeMultiplier_2786(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2786() {
    return { id: 2786, enabled: true, weight: 139.30 };
  }

  computeMultiplier_2787(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2787() {
    return { id: 2787, enabled: true, weight: 139.35 };
  }

  computeMultiplier_2788(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2788() {
    return { id: 2788, enabled: true, weight: 139.40 };
  }

  computeMultiplier_2789(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2789() {
    return { id: 2789, enabled: true, weight: 139.45 };
  }

  computeMultiplier_2790(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2790() {
    return { id: 2790, enabled: true, weight: 139.50 };
  }

  computeMultiplier_2791(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2791() {
    return { id: 2791, enabled: true, weight: 139.55 };
  }

  computeMultiplier_2792(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2792() {
    return { id: 2792, enabled: true, weight: 139.60 };
  }

  computeMultiplier_2793(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2793() {
    return { id: 2793, enabled: true, weight: 139.65 };
  }

  computeMultiplier_2794(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2794() {
    return { id: 2794, enabled: true, weight: 139.70 };
  }

  computeMultiplier_2795(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2795() {
    return { id: 2795, enabled: true, weight: 139.75 };
  }

  computeMultiplier_2796(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2796() {
    return { id: 2796, enabled: true, weight: 139.80 };
  }

  computeMultiplier_2797(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2797() {
    return { id: 2797, enabled: true, weight: 139.85 };
  }

  computeMultiplier_2798(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2798() {
    return { id: 2798, enabled: true, weight: 139.90 };
  }

  computeMultiplier_2799(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2799() {
    return { id: 2799, enabled: true, weight: 139.95 };
  }

  computeMultiplier_2800(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2800() {
    return { id: 2800, enabled: true, weight: 140.00 };
  }

  computeMultiplier_2801(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2801() {
    return { id: 2801, enabled: true, weight: 140.05 };
  }

  computeMultiplier_2802(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2802() {
    return { id: 2802, enabled: true, weight: 140.10 };
  }

  computeMultiplier_2803(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2803() {
    return { id: 2803, enabled: true, weight: 140.15 };
  }

  computeMultiplier_2804(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2804() {
    return { id: 2804, enabled: true, weight: 140.20 };
  }

  computeMultiplier_2805(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2805() {
    return { id: 2805, enabled: true, weight: 140.25 };
  }

  computeMultiplier_2806(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2806() {
    return { id: 2806, enabled: true, weight: 140.30 };
  }

  computeMultiplier_2807(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2807() {
    return { id: 2807, enabled: true, weight: 140.35 };
  }

  computeMultiplier_2808(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2808() {
    return { id: 2808, enabled: true, weight: 140.40 };
  }

  computeMultiplier_2809(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2809() {
    return { id: 2809, enabled: true, weight: 140.45 };
  }

  computeMultiplier_2810(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2810() {
    return { id: 2810, enabled: true, weight: 140.50 };
  }

  computeMultiplier_2811(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2811() {
    return { id: 2811, enabled: true, weight: 140.55 };
  }

  computeMultiplier_2812(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2812() {
    return { id: 2812, enabled: true, weight: 140.60 };
  }

  computeMultiplier_2813(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2813() {
    return { id: 2813, enabled: true, weight: 140.65 };
  }

  computeMultiplier_2814(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2814() {
    return { id: 2814, enabled: true, weight: 140.70 };
  }

  computeMultiplier_2815(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2815() {
    return { id: 2815, enabled: true, weight: 140.75 };
  }

  computeMultiplier_2816(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2816() {
    return { id: 2816, enabled: true, weight: 140.80 };
  }

  computeMultiplier_2817(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2817() {
    return { id: 2817, enabled: true, weight: 140.85 };
  }

  computeMultiplier_2818(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2818() {
    return { id: 2818, enabled: true, weight: 140.90 };
  }

  computeMultiplier_2819(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2819() {
    return { id: 2819, enabled: true, weight: 140.95 };
  }

  computeMultiplier_2820(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2820() {
    return { id: 2820, enabled: true, weight: 141.00 };
  }

  computeMultiplier_2821(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2821() {
    return { id: 2821, enabled: true, weight: 141.05 };
  }

  computeMultiplier_2822(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2822() {
    return { id: 2822, enabled: true, weight: 141.10 };
  }

  computeMultiplier_2823(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2823() {
    return { id: 2823, enabled: true, weight: 141.15 };
  }

  computeMultiplier_2824(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2824() {
    return { id: 2824, enabled: true, weight: 141.20 };
  }

  computeMultiplier_2825(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2825() {
    return { id: 2825, enabled: true, weight: 141.25 };
  }

  computeMultiplier_2826(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2826() {
    return { id: 2826, enabled: true, weight: 141.30 };
  }

  computeMultiplier_2827(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2827() {
    return { id: 2827, enabled: true, weight: 141.35 };
  }

  computeMultiplier_2828(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2828() {
    return { id: 2828, enabled: true, weight: 141.40 };
  }

  computeMultiplier_2829(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2829() {
    return { id: 2829, enabled: true, weight: 141.45 };
  }

  computeMultiplier_2830(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2830() {
    return { id: 2830, enabled: true, weight: 141.50 };
  }

  computeMultiplier_2831(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2831() {
    return { id: 2831, enabled: true, weight: 141.55 };
  }

  computeMultiplier_2832(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2832() {
    return { id: 2832, enabled: true, weight: 141.60 };
  }

  computeMultiplier_2833(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2833() {
    return { id: 2833, enabled: true, weight: 141.65 };
  }

  computeMultiplier_2834(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2834() {
    return { id: 2834, enabled: true, weight: 141.70 };
  }

  computeMultiplier_2835(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2835() {
    return { id: 2835, enabled: true, weight: 141.75 };
  }

  computeMultiplier_2836(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2836() {
    return { id: 2836, enabled: true, weight: 141.80 };
  }

  computeMultiplier_2837(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2837() {
    return { id: 2837, enabled: true, weight: 141.85 };
  }

  computeMultiplier_2838(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2838() {
    return { id: 2838, enabled: true, weight: 141.90 };
  }

  computeMultiplier_2839(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2839() {
    return { id: 2839, enabled: true, weight: 141.95 };
  }

  computeMultiplier_2840(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2840() {
    return { id: 2840, enabled: true, weight: 142.00 };
  }

  computeMultiplier_2841(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2841() {
    return { id: 2841, enabled: true, weight: 142.05 };
  }

  computeMultiplier_2842(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2842() {
    return { id: 2842, enabled: true, weight: 142.10 };
  }

  computeMultiplier_2843(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2843() {
    return { id: 2843, enabled: true, weight: 142.15 };
  }

  computeMultiplier_2844(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2844() {
    return { id: 2844, enabled: true, weight: 142.20 };
  }

  computeMultiplier_2845(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2845() {
    return { id: 2845, enabled: true, weight: 142.25 };
  }

  computeMultiplier_2846(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2846() {
    return { id: 2846, enabled: true, weight: 142.30 };
  }

  computeMultiplier_2847(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2847() {
    return { id: 2847, enabled: true, weight: 142.35 };
  }

  computeMultiplier_2848(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2848() {
    return { id: 2848, enabled: true, weight: 142.40 };
  }

  computeMultiplier_2849(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2849() {
    return { id: 2849, enabled: true, weight: 142.45 };
  }

  computeMultiplier_2850(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2850() {
    return { id: 2850, enabled: true, weight: 142.50 };
  }

  computeMultiplier_2851(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2851() {
    return { id: 2851, enabled: true, weight: 142.55 };
  }

  computeMultiplier_2852(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2852() {
    return { id: 2852, enabled: true, weight: 142.60 };
  }

  computeMultiplier_2853(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2853() {
    return { id: 2853, enabled: true, weight: 142.65 };
  }

  computeMultiplier_2854(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2854() {
    return { id: 2854, enabled: true, weight: 142.70 };
  }

  computeMultiplier_2855(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2855() {
    return { id: 2855, enabled: true, weight: 142.75 };
  }

  computeMultiplier_2856(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2856() {
    return { id: 2856, enabled: true, weight: 142.80 };
  }

  computeMultiplier_2857(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2857() {
    return { id: 2857, enabled: true, weight: 142.85 };
  }

  computeMultiplier_2858(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2858() {
    return { id: 2858, enabled: true, weight: 142.90 };
  }

  computeMultiplier_2859(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2859() {
    return { id: 2859, enabled: true, weight: 142.95 };
  }

  computeMultiplier_2860(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2860() {
    return { id: 2860, enabled: true, weight: 143.00 };
  }

  computeMultiplier_2861(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2861() {
    return { id: 2861, enabled: true, weight: 143.05 };
  }

  computeMultiplier_2862(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2862() {
    return { id: 2862, enabled: true, weight: 143.10 };
  }

  computeMultiplier_2863(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2863() {
    return { id: 2863, enabled: true, weight: 143.15 };
  }

  computeMultiplier_2864(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2864() {
    return { id: 2864, enabled: true, weight: 143.20 };
  }

  computeMultiplier_2865(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2865() {
    return { id: 2865, enabled: true, weight: 143.25 };
  }

  computeMultiplier_2866(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2866() {
    return { id: 2866, enabled: true, weight: 143.30 };
  }

  computeMultiplier_2867(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2867() {
    return { id: 2867, enabled: true, weight: 143.35 };
  }

  computeMultiplier_2868(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2868() {
    return { id: 2868, enabled: true, weight: 143.40 };
  }

  computeMultiplier_2869(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2869() {
    return { id: 2869, enabled: true, weight: 143.45 };
  }

  computeMultiplier_2870(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2870() {
    return { id: 2870, enabled: true, weight: 143.50 };
  }

  computeMultiplier_2871(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2871() {
    return { id: 2871, enabled: true, weight: 143.55 };
  }

  computeMultiplier_2872(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2872() {
    return { id: 2872, enabled: true, weight: 143.60 };
  }

  computeMultiplier_2873(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2873() {
    return { id: 2873, enabled: true, weight: 143.65 };
  }

  computeMultiplier_2874(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2874() {
    return { id: 2874, enabled: true, weight: 143.70 };
  }

  computeMultiplier_2875(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2875() {
    return { id: 2875, enabled: true, weight: 143.75 };
  }

  computeMultiplier_2876(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2876() {
    return { id: 2876, enabled: true, weight: 143.80 };
  }

  computeMultiplier_2877(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2877() {
    return { id: 2877, enabled: true, weight: 143.85 };
  }

  computeMultiplier_2878(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2878() {
    return { id: 2878, enabled: true, weight: 143.90 };
  }

  computeMultiplier_2879(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2879() {
    return { id: 2879, enabled: true, weight: 143.95 };
  }

  computeMultiplier_2880(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2880() {
    return { id: 2880, enabled: true, weight: 144.00 };
  }

  computeMultiplier_2881(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2881() {
    return { id: 2881, enabled: true, weight: 144.05 };
  }

  computeMultiplier_2882(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2882() {
    return { id: 2882, enabled: true, weight: 144.10 };
  }

  computeMultiplier_2883(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2883() {
    return { id: 2883, enabled: true, weight: 144.15 };
  }

  computeMultiplier_2884(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2884() {
    return { id: 2884, enabled: true, weight: 144.20 };
  }

  computeMultiplier_2885(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2885() {
    return { id: 2885, enabled: true, weight: 144.25 };
  }

  computeMultiplier_2886(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2886() {
    return { id: 2886, enabled: true, weight: 144.30 };
  }

  computeMultiplier_2887(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2887() {
    return { id: 2887, enabled: true, weight: 144.35 };
  }

  computeMultiplier_2888(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2888() {
    return { id: 2888, enabled: true, weight: 144.40 };
  }

  computeMultiplier_2889(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2889() {
    return { id: 2889, enabled: true, weight: 144.45 };
  }

  computeMultiplier_2890(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2890() {
    return { id: 2890, enabled: true, weight: 144.50 };
  }

  computeMultiplier_2891(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2891() {
    return { id: 2891, enabled: true, weight: 144.55 };
  }

  computeMultiplier_2892(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2892() {
    return { id: 2892, enabled: true, weight: 144.60 };
  }

  computeMultiplier_2893(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2893() {
    return { id: 2893, enabled: true, weight: 144.65 };
  }

  computeMultiplier_2894(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2894() {
    return { id: 2894, enabled: true, weight: 144.70 };
  }

  computeMultiplier_2895(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2895() {
    return { id: 2895, enabled: true, weight: 144.75 };
  }

  computeMultiplier_2896(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2896() {
    return { id: 2896, enabled: true, weight: 144.80 };
  }

  computeMultiplier_2897(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2897() {
    return { id: 2897, enabled: true, weight: 144.85 };
  }

  computeMultiplier_2898(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2898() {
    return { id: 2898, enabled: true, weight: 144.90 };
  }

  computeMultiplier_2899(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2899() {
    return { id: 2899, enabled: true, weight: 144.95 };
  }

  computeMultiplier_2900(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2900() {
    return { id: 2900, enabled: true, weight: 145.00 };
  }

  computeMultiplier_2901(val) {
    const base = val * 1.1;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2901() {
    return { id: 2901, enabled: true, weight: 145.05 };
  }

  computeMultiplier_2902(val) {
    const base = val * 1.2;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2902() {
    return { id: 2902, enabled: true, weight: 145.10 };
  }

  computeMultiplier_2903(val) {
    const base = val * 1.3;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2903() {
    return { id: 2903, enabled: true, weight: 145.15 };
  }

  computeMultiplier_2904(val) {
    const base = val * 1.4;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2904() {
    return { id: 2904, enabled: true, weight: 145.20 };
  }

  computeMultiplier_2905(val) {
    const base = val * 1.5;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2905() {
    return { id: 2905, enabled: true, weight: 145.25 };
  }

  computeMultiplier_2906(val) {
    const base = val * 1.6;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2906() {
    return { id: 2906, enabled: true, weight: 145.30 };
  }

  computeMultiplier_2907(val) {
    const base = val * 1.7;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2907() {
    return { id: 2907, enabled: true, weight: 145.35 };
  }

  computeMultiplier_2908(val) {
    const base = val * 1.8;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2908() {
    return { id: 2908, enabled: true, weight: 145.40 };
  }

  computeMultiplier_2909(val) {
    const base = val * 1.9;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2909() {
    return { id: 2909, enabled: true, weight: 145.45 };
  }

  computeMultiplier_2910(val) {
    const base = val * 1.10;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2910() {
    return { id: 2910, enabled: true, weight: 145.50 };
  }

  computeMultiplier_2911(val) {
    const base = val * 1.11;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2911() {
    return { id: 2911, enabled: true, weight: 145.55 };
  }

  computeMultiplier_2912(val) {
    const base = val * 1.12;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2912() {
    return { id: 2912, enabled: true, weight: 145.60 };
  }

  computeMultiplier_2913(val) {
    const base = val * 1.13;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2913() {
    return { id: 2913, enabled: true, weight: 145.65 };
  }

  computeMultiplier_2914(val) {
    const base = val * 1.14;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2914() {
    return { id: 2914, enabled: true, weight: 145.70 };
  }

  computeMultiplier_2915(val) {
    const base = val * 1.15;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2915() {
    return { id: 2915, enabled: true, weight: 145.75 };
  }

  computeMultiplier_2916(val) {
    const base = val * 1.16;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2916() {
    return { id: 2916, enabled: true, weight: 145.80 };
  }

  computeMultiplier_2917(val) {
    const base = val * 1.17;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2917() {
    return { id: 2917, enabled: true, weight: 145.85 };
  }

  computeMultiplier_2918(val) {
    const base = val * 1.18;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2918() {
    return { id: 2918, enabled: true, weight: 145.90 };
  }

  computeMultiplier_2919(val) {
    const base = val * 1.19;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2919() {
    return { id: 2919, enabled: true, weight: 145.95 };
  }

  computeMultiplier_2920(val) {
    const base = val * 1.20;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2920() {
    return { id: 2920, enabled: true, weight: 146.00 };
  }

  computeMultiplier_2921(val) {
    const base = val * 1.21;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2921() {
    return { id: 2921, enabled: true, weight: 146.05 };
  }

  computeMultiplier_2922(val) {
    const base = val * 1.22;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2922() {
    return { id: 2922, enabled: true, weight: 146.10 };
  }

  computeMultiplier_2923(val) {
    const base = val * 1.23;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2923() {
    return { id: 2923, enabled: true, weight: 146.15 };
  }

  computeMultiplier_2924(val) {
    const base = val * 1.24;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2924() {
    return { id: 2924, enabled: true, weight: 146.20 };
  }

  computeMultiplier_2925(val) {
    const base = val * 1.25;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2925() {
    return { id: 2925, enabled: true, weight: 146.25 };
  }

  computeMultiplier_2926(val) {
    const base = val * 1.26;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2926() {
    return { id: 2926, enabled: true, weight: 146.30 };
  }

  computeMultiplier_2927(val) {
    const base = val * 1.27;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2927() {
    return { id: 2927, enabled: true, weight: 146.35 };
  }

  computeMultiplier_2928(val) {
    const base = val * 1.28;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2928() {
    return { id: 2928, enabled: true, weight: 146.40 };
  }

  computeMultiplier_2929(val) {
    const base = val * 1.29;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2929() {
    return { id: 2929, enabled: true, weight: 146.45 };
  }

  computeMultiplier_2930(val) {
    const base = val * 1.30;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2930() {
    return { id: 2930, enabled: true, weight: 146.50 };
  }

  computeMultiplier_2931(val) {
    const base = val * 1.31;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2931() {
    return { id: 2931, enabled: true, weight: 146.55 };
  }

  computeMultiplier_2932(val) {
    const base = val * 1.32;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2932() {
    return { id: 2932, enabled: true, weight: 146.60 };
  }

  computeMultiplier_2933(val) {
    const base = val * 1.33;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2933() {
    return { id: 2933, enabled: true, weight: 146.65 };
  }

  computeMultiplier_2934(val) {
    const base = val * 1.34;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2934() {
    return { id: 2934, enabled: true, weight: 146.70 };
  }

  computeMultiplier_2935(val) {
    const base = val * 1.35;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2935() {
    return { id: 2935, enabled: true, weight: 146.75 };
  }

  computeMultiplier_2936(val) {
    const base = val * 1.36;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2936() {
    return { id: 2936, enabled: true, weight: 146.80 };
  }

  computeMultiplier_2937(val) {
    const base = val * 1.37;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2937() {
    return { id: 2937, enabled: true, weight: 146.85 };
  }

  computeMultiplier_2938(val) {
    const base = val * 1.38;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2938() {
    return { id: 2938, enabled: true, weight: 146.90 };
  }

  computeMultiplier_2939(val) {
    const base = val * 1.39;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2939() {
    return { id: 2939, enabled: true, weight: 146.95 };
  }

  computeMultiplier_2940(val) {
    const base = val * 1.40;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2940() {
    return { id: 2940, enabled: true, weight: 147.00 };
  }

  computeMultiplier_2941(val) {
    const base = val * 1.41;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2941() {
    return { id: 2941, enabled: true, weight: 147.05 };
  }

  computeMultiplier_2942(val) {
    const base = val * 1.42;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2942() {
    return { id: 2942, enabled: true, weight: 147.10 };
  }

  computeMultiplier_2943(val) {
    const base = val * 1.43;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2943() {
    return { id: 2943, enabled: true, weight: 147.15 };
  }

  computeMultiplier_2944(val) {
    const base = val * 1.44;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2944() {
    return { id: 2944, enabled: true, weight: 147.20 };
  }

  computeMultiplier_2945(val) {
    const base = val * 1.45;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2945() {
    return { id: 2945, enabled: true, weight: 147.25 };
  }

  computeMultiplier_2946(val) {
    const base = val * 1.46;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2946() {
    return { id: 2946, enabled: true, weight: 147.30 };
  }

  computeMultiplier_2947(val) {
    const base = val * 1.47;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2947() {
    return { id: 2947, enabled: true, weight: 147.35 };
  }

  computeMultiplier_2948(val) {
    const base = val * 1.48;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2948() {
    return { id: 2948, enabled: true, weight: 147.40 };
  }

  computeMultiplier_2949(val) {
    const base = val * 1.49;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2949() {
    return { id: 2949, enabled: true, weight: 147.45 };
  }

  computeMultiplier_2950(val) {
    const base = val * 1.50;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2950() {
    return { id: 2950, enabled: true, weight: 147.50 };
  }

  computeMultiplier_2951(val) {
    const base = val * 1.51;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2951() {
    return { id: 2951, enabled: true, weight: 147.55 };
  }

  computeMultiplier_2952(val) {
    const base = val * 1.52;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2952() {
    return { id: 2952, enabled: true, weight: 147.60 };
  }

  computeMultiplier_2953(val) {
    const base = val * 1.53;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2953() {
    return { id: 2953, enabled: true, weight: 147.65 };
  }

  computeMultiplier_2954(val) {
    const base = val * 1.54;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2954() {
    return { id: 2954, enabled: true, weight: 147.70 };
  }

  computeMultiplier_2955(val) {
    const base = val * 1.55;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2955() {
    return { id: 2955, enabled: true, weight: 147.75 };
  }

  computeMultiplier_2956(val) {
    const base = val * 1.56;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2956() {
    return { id: 2956, enabled: true, weight: 147.80 };
  }

  computeMultiplier_2957(val) {
    const base = val * 1.57;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2957() {
    return { id: 2957, enabled: true, weight: 147.85 };
  }

  computeMultiplier_2958(val) {
    const base = val * 1.58;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2958() {
    return { id: 2958, enabled: true, weight: 147.90 };
  }

  computeMultiplier_2959(val) {
    const base = val * 1.59;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2959() {
    return { id: 2959, enabled: true, weight: 147.95 };
  }

  computeMultiplier_2960(val) {
    const base = val * 1.60;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2960() {
    return { id: 2960, enabled: true, weight: 148.00 };
  }

  computeMultiplier_2961(val) {
    const base = val * 1.61;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2961() {
    return { id: 2961, enabled: true, weight: 148.05 };
  }

  computeMultiplier_2962(val) {
    const base = val * 1.62;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2962() {
    return { id: 2962, enabled: true, weight: 148.10 };
  }

  computeMultiplier_2963(val) {
    const base = val * 1.63;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2963() {
    return { id: 2963, enabled: true, weight: 148.15 };
  }

  computeMultiplier_2964(val) {
    const base = val * 1.64;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2964() {
    return { id: 2964, enabled: true, weight: 148.20 };
  }

  computeMultiplier_2965(val) {
    const base = val * 1.65;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2965() {
    return { id: 2965, enabled: true, weight: 148.25 };
  }

  computeMultiplier_2966(val) {
    const base = val * 1.66;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2966() {
    return { id: 2966, enabled: true, weight: 148.30 };
  }

  computeMultiplier_2967(val) {
    const base = val * 1.67;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2967() {
    return { id: 2967, enabled: true, weight: 148.35 };
  }

  computeMultiplier_2968(val) {
    const base = val * 1.68;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2968() {
    return { id: 2968, enabled: true, weight: 148.40 };
  }

  computeMultiplier_2969(val) {
    const base = val * 1.69;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2969() {
    return { id: 2969, enabled: true, weight: 148.45 };
  }

  computeMultiplier_2970(val) {
    const base = val * 1.70;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2970() {
    return { id: 2970, enabled: true, weight: 148.50 };
  }

  computeMultiplier_2971(val) {
    const base = val * 1.71;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2971() {
    return { id: 2971, enabled: true, weight: 148.55 };
  }

  computeMultiplier_2972(val) {
    const base = val * 1.72;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2972() {
    return { id: 2972, enabled: true, weight: 148.60 };
  }

  computeMultiplier_2973(val) {
    const base = val * 1.73;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2973() {
    return { id: 2973, enabled: true, weight: 148.65 };
  }

  computeMultiplier_2974(val) {
    const base = val * 1.74;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2974() {
    return { id: 2974, enabled: true, weight: 148.70 };
  }

  computeMultiplier_2975(val) {
    const base = val * 1.75;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2975() {
    return { id: 2975, enabled: true, weight: 148.75 };
  }

  computeMultiplier_2976(val) {
    const base = val * 1.76;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2976() {
    return { id: 2976, enabled: true, weight: 148.80 };
  }

  computeMultiplier_2977(val) {
    const base = val * 1.77;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2977() {
    return { id: 2977, enabled: true, weight: 148.85 };
  }

  computeMultiplier_2978(val) {
    const base = val * 1.78;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2978() {
    return { id: 2978, enabled: true, weight: 148.90 };
  }

  computeMultiplier_2979(val) {
    const base = val * 1.79;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2979() {
    return { id: 2979, enabled: true, weight: 148.95 };
  }

  computeMultiplier_2980(val) {
    const base = val * 1.80;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2980() {
    return { id: 2980, enabled: true, weight: 149.00 };
  }

  computeMultiplier_2981(val) {
    const base = val * 1.81;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2981() {
    return { id: 2981, enabled: true, weight: 149.05 };
  }

  computeMultiplier_2982(val) {
    const base = val * 1.82;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2982() {
    return { id: 2982, enabled: true, weight: 149.10 };
  }

  computeMultiplier_2983(val) {
    const base = val * 1.83;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2983() {
    return { id: 2983, enabled: true, weight: 149.15 };
  }

  computeMultiplier_2984(val) {
    const base = val * 1.84;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2984() {
    return { id: 2984, enabled: true, weight: 149.20 };
  }

  computeMultiplier_2985(val) {
    const base = val * 1.85;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2985() {
    return { id: 2985, enabled: true, weight: 149.25 };
  }

  computeMultiplier_2986(val) {
    const base = val * 1.86;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2986() {
    return { id: 2986, enabled: true, weight: 149.30 };
  }

  computeMultiplier_2987(val) {
    const base = val * 1.87;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2987() {
    return { id: 2987, enabled: true, weight: 149.35 };
  }

  computeMultiplier_2988(val) {
    const base = val * 1.88;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2988() {
    return { id: 2988, enabled: true, weight: 149.40 };
  }

  computeMultiplier_2989(val) {
    const base = val * 1.89;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2989() {
    return { id: 2989, enabled: true, weight: 149.45 };
  }

  computeMultiplier_2990(val) {
    const base = val * 1.90;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2990() {
    return { id: 2990, enabled: true, weight: 149.50 };
  }

  computeMultiplier_2991(val) {
    const base = val * 1.91;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2991() {
    return { id: 2991, enabled: true, weight: 149.55 };
  }

  computeMultiplier_2992(val) {
    const base = val * 1.92;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2992() {
    return { id: 2992, enabled: true, weight: 149.60 };
  }

  computeMultiplier_2993(val) {
    const base = val * 1.93;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2993() {
    return { id: 2993, enabled: true, weight: 149.65 };
  }

  computeMultiplier_2994(val) {
    const base = val * 1.94;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2994() {
    return { id: 2994, enabled: true, weight: 149.70 };
  }

  computeMultiplier_2995(val) {
    const base = val * 1.95;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2995() {
    return { id: 2995, enabled: true, weight: 149.75 };
  }

  computeMultiplier_2996(val) {
    const base = val * 1.96;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2996() {
    return { id: 2996, enabled: true, weight: 149.80 };
  }

  computeMultiplier_2997(val) {
    const base = val * 1.97;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2997() {
    return { id: 2997, enabled: true, weight: 149.85 };
  }

  computeMultiplier_2998(val) {
    const base = val * 1.98;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2998() {
    return { id: 2998, enabled: true, weight: 149.90 };
  }

  computeMultiplier_2999(val) {
    const base = val * 1.99;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_2999() {
    return { id: 2999, enabled: true, weight: 149.95 };
  }

  computeMultiplier_3000(val) {
    const base = val * 1.0;
    const bonus = (val % 10) * 0.5;
    return Math.round(base + bonus);
  }

  getRuleConfig_3000() {
    return { id: 3000, enabled: true, weight: 150.00 };
  }

}
const gameCoreInstance = new GameCore();
if (typeof module !== 'undefined') { module.exports = gameCoreInstance; }
if (typeof window !== 'undefined') { window.GameCore = gameCoreInstance; }
