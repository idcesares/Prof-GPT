import {
  S as Wa,
  i as Ya,
  s as Za,
  k as a,
  q as i,
  a as E,
  l as o,
  m as l,
  r as s,
  h as t,
  c as f,
  n,
  J as xa,
  b as Qa,
  G as e,
  K as qa,
  L as le,
  M as _e,
  u as be,
  H as wa,
  N as $a,
  O as eo,
} from "../chunks/index.c8c01468.js";
function Ha(r) {
  let d, p, F, N, m, C, M, O, c, I, h, y, R, u;
  return {
    c() {
      (d = a("div")),
        (p = a("h3")),
        (F = i("Prompt para o ChatGPT:")),
        (N = E()),
        (m = a("p")),
        (C = i("Utilize o botão abaixo para copiar o prompt para o ChatGPT")),
        (M = E()),
        (O = a("pre")),
        (c = i(r[5])),
        (I = E()),
        (h = a("button")),
        (y = i("Copiar para a Área de Transferência")),
        this.h();
    },
    l(A) {
      d = o(A, "DIV", { class: !0 });
      var b = l(d);
      p = o(b, "H3", {});
      var g = l(p);
      (F = s(g, "Prompt para o ChatGPT:")),
        g.forEach(t),
        (N = f(b)),
        (m = o(b, "P", { class: !0 }));
      var q = l(m);
      (C = s(q, "Utilize o botão abaixo para copiar o prompt para o ChatGPT")),
        q.forEach(t),
        (M = f(b)),
        (O = o(b, "PRE", {}));
      var D = l(O);
      (c = s(D, r[5])),
        D.forEach(t),
        (I = f(b)),
        (h = o(b, "BUTTON", { class: !0 }));
      var w = l(h);
      (y = s(w, "Copiar para a Área de Transferência")),
        w.forEach(t),
        b.forEach(t),
        this.h();
    },
    h() {
      n(m, "class", "subtitle"),
        n(h, "class", "btn btn-secondary copy-btn svelte-keap3l"),
        n(d, "class", "result-area svelte-keap3l");
    },
    m(A, b) {
      Qa(A, d, b),
        e(d, p),
        e(p, F),
        e(d, N),
        e(d, m),
        e(m, C),
        e(d, M),
        e(d, O),
        e(O, c),
        e(d, I),
        e(d, h),
        e(h, y),
        R || ((u = _e(h, "click", r[11])), (R = !0));
    },
    p(A, b) {
      b & 32 && be(c, A[5]);
    },
    d(A) {
      A && t(d), (R = !1), u();
    },
  };
}
function ao(r) {
  let d,
    p,
    F,
    N,
    m,
    C,
    M,
    O,
    c,
    I,
    h,
    y,
    R,
    u,
    A,
    b,
    g,
    q,
    D,
    w,
    H,
    Ne,
    X,
    Ce,
    K,
    ge,
    Q,
    De,
    W,
    Me,
    Y,
    Ve,
    Z,
    Ge,
    x,
    Le,
    $,
    Be,
    ee,
    ke,
    ae,
    ye,
    oe,
    Je,
    te,
    je,
    ne,
    ze,
    Se,
    J,
    ie,
    Re,
    Ue,
    G,
    qe,
    se,
    Pe,
    we,
    He,
    j,
    re,
    Xe,
    Ke,
    L,
    Qe,
    ue,
    Oe,
    We,
    Ye,
    z,
    de,
    Ze,
    xe,
    B,
    $e,
    ce,
    Te,
    ea,
    aa,
    S,
    pe,
    oa,
    ta,
    k,
    na,
    ve,
    Ie,
    la,
    ia,
    U,
    sa,
    Ae,
    ra,
    ua,
    da,
    fa,
    T = r[5] && Ha(r);
  return {
    c() {
      (d = a("div")),
        (p = a("h1")),
        (F = i(Xa)),
        (N = E()),
        (m = a("p")),
        (C = i(Ka)),
        (M = E()),
        (O = a("div")),
        (c = a("form")),
        (I = a("div")),
        (h = a("label")),
        (y = i("Nível da etapa/modalidade da Educação Básica")),
        (R = E()),
        (u = a("select")),
        (A = a("option")),
        (b = i("Educação Infantil - Creche")),
        (g = a("option")),
        (q = i("Educação Infantil - Pré-Escola")),
        (D = a("option")),
        (w = i("1º Ano - Ensino Fundamental")),
        (H = a("option")),
        (Ne = i("2º Ano - Ensino Fundamental")),
        (X = a("option")),
        (Ce = i("3º Ano - Ensino Fundamental")),
        (K = a("option")),
        (ge = i("4º Ano - Ensino Fundamental")),
        (Q = a("option")),
        (De = i("5º Ano - Ensino Fundamental")),
        (W = a("option")),
        (Me = i("6º Ano - Ensino Fundamental")),
        (Y = a("option")),
        (Ve = i("7º Ano - Ensino Fundamental")),
        (Z = a("option")),
        (Ge = i("8º Ano - Ensino Fundamental")),
        (x = a("option")),
        (Le = i("9º Ano - Ensino Fundamental")),
        ($ = a("option")),
        (Be = i("1º Ano - Ensino Médio")),
        (ee = a("option")),
        (ke = i("2º Ano - Ensino Médio")),
        (ae = a("option")),
        (ye = i("3º Ano - Ensino Médio")),
        (oe = a("option")),
        (Je = i("EJA - Ensino Fundamental - Anos Iniciais")),
        (te = a("option")),
        (je = i("EJA - Ensino Fundamental - Anos Finais")),
        (ne = a("option")),
        (ze = i("EJA - Ensino Médio")),
        (Se = E()),
        (J = a("div")),
        (ie = a("label")),
        (Re = i("Nome da Aula")),
        (Ue = E()),
        (G = a("input")),
        (qe = E()),
        (se = a("div")),
        (Pe = i(r[6])),
        (we = i(" / 50 caracteres")),
        (He = E()),
        (j = a("div")),
        (re = a("label")),
        (Xe = i("Disciplina ou Componente Curricular")),
        (Ke = E()),
        (L = a("input")),
        (Qe = E()),
        (ue = a("div")),
        (Oe = i(r[7])),
        (We = i(" / 50 caracteres")),
        (Ye = E()),
        (z = a("div")),
        (de = a("label")),
        (Ze = i("Esta aula deve conter")),
        (xe = E()),
        (B = a("textarea")),
        ($e = E()),
        (ce = a("div")),
        (Te = i(r[8])),
        (ea = i(" / 1500 caracteres")),
        (aa = E()),
        (S = a("div")),
        (pe = a("label")),
        (oa = i("Principais objetivos da aula")),
        (ta = E()),
        (k = a("textarea")),
        (na = E()),
        (ve = a("div")),
        (Ie = i(r[9])),
        (la = i(" / 1500 caracteres")),
        (ia = E()),
        (U = a("button")),
        (sa = i("Gerar Prompt para o ")),
        (Ae = a("strong")),
        (ra = i("ChatGPT")),
        (ua = E()),
        T && T.c(),
        this.h();
    },
    l(_) {
      d = o(_, "DIV", { class: !0 });
      var v = l(d);
      p = o(v, "H1", {});
      var ma = l(p);
      (F = s(ma, Xa)),
        ma.forEach(t),
        (N = f(v)),
        (m = o(v, "P", { class: !0 }));
      var ha = l(m);
      (C = s(ha, Ka)),
        ha.forEach(t),
        (M = f(v)),
        (O = o(v, "DIV", { class: !0 }));
      var Aa = l(O);
      c = o(Aa, "FORM", {});
      var V = l(c);
      I = o(V, "DIV", { class: !0 });
      var Fe = l(I);
      h = o(Fe, "LABEL", { for: !0, class: !0 });
      var ba = l(h);
      (y = s(ba, "Nível da etapa/modalidade da Educação Básica")),
        ba.forEach(t),
        (R = f(Fe)),
        (u = o(Fe, "SELECT", { class: !0, id: !0, placeholder: !0 }));
      var P = l(u);
      A = o(P, "OPTION", {});
      var Pa = l(A);
      (b = s(Pa, "Educação Infantil - Creche")),
        Pa.forEach(t),
        (g = o(P, "OPTION", {}));
      var Oa = l(g);
      (q = s(Oa, "Educação Infantil - Pré-Escola")),
        Oa.forEach(t),
        (D = o(P, "OPTION", {}));
      var Ta = l(D);
      (w = s(Ta, "1º Ano - Ensino Fundamental")),
        Ta.forEach(t),
        (H = o(P, "OPTION", {}));
      var Ia = l(H);
      (Ne = s(Ia, "2º Ano - Ensino Fundamental")),
        Ia.forEach(t),
        (X = o(P, "OPTION", {}));
      var Fa = l(X);
      (Ce = s(Fa, "3º Ano - Ensino Fundamental")),
        Fa.forEach(t),
        (K = o(P, "OPTION", {}));
      var Na = l(K);
      (ge = s(Na, "4º Ano - Ensino Fundamental")),
        Na.forEach(t),
        (Q = o(P, "OPTION", {}));
      var Ca = l(Q);
      (De = s(Ca, "5º Ano - Ensino Fundamental")),
        Ca.forEach(t),
        (W = o(P, "OPTION", {}));
      var ga = l(W);
      (Me = s(ga, "6º Ano - Ensino Fundamental")),
        ga.forEach(t),
        (Y = o(P, "OPTION", {}));
      var Da = l(Y);
      (Ve = s(Da, "7º Ano - Ensino Fundamental")),
        Da.forEach(t),
        (Z = o(P, "OPTION", {}));
      var Ma = l(Z);
      (Ge = s(Ma, "8º Ano - Ensino Fundamental")),
        Ma.forEach(t),
        (x = o(P, "OPTION", {}));
      var Va = l(x);
      (Le = s(Va, "9º Ano - Ensino Fundamental")),
        Va.forEach(t),
        ($ = o(P, "OPTION", {}));
      var Ga = l($);
      (Be = s(Ga, "1º Ano - Ensino Médio")),
        Ga.forEach(t),
        (ee = o(P, "OPTION", {}));
      var La = l(ee);
      (ke = s(La, "2º Ano - Ensino Médio")),
        La.forEach(t),
        (ae = o(P, "OPTION", {}));
      var Ba = l(ae);
      (ye = s(Ba, "3º Ano - Ensino Médio")),
        Ba.forEach(t),
        (oe = o(P, "OPTION", {}));
      var ka = l(oe);
      (Je = s(ka, "EJA - Ensino Fundamental - Anos Iniciais")),
        ka.forEach(t),
        (te = o(P, "OPTION", {}));
      var ya = l(te);
      (je = s(ya, "EJA - Ensino Fundamental - Anos Finais")),
        ya.forEach(t),
        (ne = o(P, "OPTION", {}));
      var Ja = l(ne);
      (ze = s(Ja, "EJA - Ensino Médio")),
        Ja.forEach(t),
        P.forEach(t),
        Fe.forEach(t),
        (Se = f(V)),
        (J = o(V, "DIV", { class: !0 }));
      var Ee = l(J);
      ie = o(Ee, "LABEL", { for: !0, class: !0 });
      var ja = l(ie);
      (Re = s(ja, "Nome da Aula")),
        ja.forEach(t),
        (Ue = f(Ee)),
        (G = o(Ee, "INPUT", { type: !0, class: !0, id: !0, maxlength: !0 })),
        (qe = f(Ee)),
        (se = o(Ee, "DIV", { class: !0 }));
      var ca = l(se);
      (Pe = s(ca, r[6])),
        (we = s(ca, " / 50 caracteres")),
        ca.forEach(t),
        Ee.forEach(t),
        (He = f(V)),
        (j = o(V, "DIV", { class: !0 }));
      var fe = l(j);
      re = o(fe, "LABEL", { for: !0, class: !0 });
      var za = l(re);
      (Xe = s(za, "Disciplina ou Componente Curricular")),
        za.forEach(t),
        (Ke = f(fe)),
        (L = o(fe, "INPUT", { type: !0, class: !0, id: !0, maxlength: !0 })),
        (Qe = f(fe)),
        (ue = o(fe, "DIV", { class: !0 }));
      var pa = l(ue);
      (Oe = s(pa, r[7])),
        (We = s(pa, " / 50 caracteres")),
        pa.forEach(t),
        fe.forEach(t),
        (Ye = f(V)),
        (z = o(V, "DIV", { class: !0 }));
      var me = l(z);
      de = o(me, "LABEL", { for: !0, class: !0 });
      var Sa = l(de);
      (Ze = s(Sa, "Esta aula deve conter")),
        Sa.forEach(t),
        (xe = f(me)),
        (B = o(me, "TEXTAREA", { class: !0, id: !0, rows: !0, maxlength: !0 })),
        l(B).forEach(t),
        ($e = f(me)),
        (ce = o(me, "DIV", { class: !0 }));
      var va = l(ce);
      (Te = s(va, r[8])),
        (ea = s(va, " / 1500 caracteres")),
        va.forEach(t),
        me.forEach(t),
        (aa = f(V)),
        (S = o(V, "DIV", { class: !0 }));
      var he = l(S);
      pe = o(he, "LABEL", { for: !0, class: !0 });
      var Ra = l(pe);
      (oa = s(Ra, "Principais objetivos da aula")),
        Ra.forEach(t),
        (ta = f(he)),
        (k = o(he, "TEXTAREA", { class: !0, id: !0, rows: !0, maxlength: !0 })),
        l(k).forEach(t),
        (na = f(he)),
        (ve = o(he, "DIV", { class: !0 }));
      var _a = l(ve);
      (Ie = s(_a, r[9])),
        (la = s(_a, " / 1500 caracteres")),
        _a.forEach(t),
        he.forEach(t),
        (ia = f(V)),
        (U = o(V, "BUTTON", { type: !0, class: !0 }));
      var Ea = l(U);
      (sa = s(Ea, "Gerar Prompt para o ")), (Ae = o(Ea, "STRONG", {}));
      var Ua = l(Ae);
      (ra = s(Ua, "ChatGPT")),
        Ua.forEach(t),
        Ea.forEach(t),
        V.forEach(t),
        Aa.forEach(t),
        (ua = f(v)),
        T && T.l(v),
        v.forEach(t),
        this.h();
    },
    h() {
      n(m, "class", "lead"),
        n(h, "for", "nivelEducacao"),
        n(h, "class", "form-label"),
        (A.__value = "Educação Infantil - Creche"),
        (A.value = A.__value),
        (g.__value = "Educação Infantil - Pré-Escola"),
        (g.value = g.__value),
        (D.__value = "1º Ano - Ensino Fundamental"),
        (D.value = D.__value),
        (H.__value = "2º Ano - Ensino Fundamental"),
        (H.value = H.__value),
        (X.__value = "3º Ano - Ensino Fundamental"),
        (X.value = X.__value),
        (K.__value = "4º Ano - Ensino Fundamental"),
        (K.value = K.__value),
        (Q.__value = "5º Ano - Ensino Fundamental"),
        (Q.value = Q.__value),
        (W.__value = "6º Ano - Ensino Fundamental"),
        (W.value = W.__value),
        (Y.__value = "7º Ano - Ensino Fundamental"),
        (Y.value = Y.__value),
        (Z.__value = "8º Ano - Ensino Fundamental"),
        (Z.value = Z.__value),
        (x.__value = "9º Ano - Ensino Fundamental"),
        (x.value = x.__value),
        ($.__value = "1º Ano - Ensino Médio"),
        ($.value = $.__value),
        (ee.__value = "2º Ano - Ensino Médio"),
        (ee.value = ee.__value),
        (ae.__value = "3º Ano - Ensino Médio"),
        (ae.value = ae.__value),
        (oe.__value = "EJA - Ensino Fundamental - Anos Iniciais"),
        (oe.value = oe.__value),
        (te.__value = "EJA - Ensino Fundamental - Anos Finais"),
        (te.value = te.__value),
        (ne.__value = "EJA - Ensino Médio"),
        (ne.value = ne.__value),
        n(u, "class", "form-control"),
        n(u, "id", "nivelEducacao"),
        n(u, "placeholder", "Selecione o nível"),
        r[4] === void 0 && xa(() => r[12].call(u)),
        n(I, "class", "mb-3"),
        n(ie, "for", "nomeAula"),
        n(ie, "class", "form-label"),
        n(G, "type", "text"),
        n(G, "class", "form-control"),
        n(G, "id", "nomeAula"),
        n(G, "maxlength", "50"),
        n(se, "class", "form-text"),
        n(J, "class", "mb-3"),
        n(re, "for", "disciplina"),
        n(re, "class", "form-label"),
        n(L, "type", "text"),
        n(L, "class", "form-control"),
        n(L, "id", "disciplina"),
        n(L, "maxlength", "50"),
        n(ue, "class", "form-text"),
        n(j, "class", "mb-3"),
        n(de, "for", "conteudoAula"),
        n(de, "class", "form-label"),
        n(B, "class", "form-control"),
        n(B, "id", "conteudoAula"),
        n(B, "rows", "3"),
        n(B, "maxlength", "1500"),
        n(ce, "class", "form-text"),
        n(z, "class", "mb-3"),
        n(pe, "for", "objetivosAula"),
        n(pe, "class", "form-label"),
        n(k, "class", "form-control"),
        n(k, "id", "objetivosAula"),
        n(k, "rows", "3"),
        n(k, "maxlength", "1500"),
        n(ve, "class", "form-text"),
        n(S, "class", "mb-3"),
        n(U, "type", "button"),
        n(U, "class", "btn btn-primary"),
        n(O, "class", "form-container svelte-keap3l"),
        n(d, "class", "container svelte-keap3l");
    },
    m(_, v) {
      Qa(_, d, v),
        e(d, p),
        e(p, F),
        e(d, N),
        e(d, m),
        e(m, C),
        e(d, M),
        e(d, O),
        e(O, c),
        e(c, I),
        e(I, h),
        e(h, y),
        e(I, R),
        e(I, u),
        e(u, A),
        e(A, b),
        e(u, g),
        e(g, q),
        e(u, D),
        e(D, w),
        e(u, H),
        e(H, Ne),
        e(u, X),
        e(X, Ce),
        e(u, K),
        e(K, ge),
        e(u, Q),
        e(Q, De),
        e(u, W),
        e(W, Me),
        e(u, Y),
        e(Y, Ve),
        e(u, Z),
        e(Z, Ge),
        e(u, x),
        e(x, Le),
        e(u, $),
        e($, Be),
        e(u, ee),
        e(ee, ke),
        e(u, ae),
        e(ae, ye),
        e(u, oe),
        e(oe, Je),
        e(u, te),
        e(te, je),
        e(u, ne),
        e(ne, ze),
        qa(u, r[4], !0),
        e(c, Se),
        e(c, J),
        e(J, ie),
        e(ie, Re),
        e(J, Ue),
        e(J, G),
        le(G, r[0]),
        e(J, qe),
        e(J, se),
        e(se, Pe),
        e(se, we),
        e(c, He),
        e(c, j),
        e(j, re),
        e(re, Xe),
        e(j, Ke),
        e(j, L),
        le(L, r[1]),
        e(j, Qe),
        e(j, ue),
        e(ue, Oe),
        e(ue, We),
        e(c, Ye),
        e(c, z),
        e(z, de),
        e(de, Ze),
        e(z, xe),
        e(z, B),
        le(B, r[2]),
        e(z, $e),
        e(z, ce),
        e(ce, Te),
        e(ce, ea),
        e(c, aa),
        e(c, S),
        e(S, pe),
        e(pe, oa),
        e(S, ta),
        e(S, k),
        le(k, r[3]),
        e(S, na),
        e(S, ve),
        e(ve, Ie),
        e(ve, la),
        e(c, ia),
        e(c, U),
        e(U, sa),
        e(U, Ae),
        e(Ae, ra),
        e(d, ua),
        T && T.m(d, null),
        da ||
          ((fa = [
            _e(u, "change", r[12]),
            _e(G, "input", r[13]),
            _e(L, "input", r[14]),
            _e(B, "input", r[15]),
            _e(k, "input", r[16]),
            _e(U, "click", r[10]),
          ]),
          (da = !0));
    },
    p(_, [v]) {
      v & 16 && qa(u, _[4]),
        v & 1 && G.value !== _[0] && le(G, _[0]),
        v & 64 && be(Pe, _[6]),
        v & 2 && L.value !== _[1] && le(L, _[1]),
        v & 128 && be(Oe, _[7]),
        v & 4 && le(B, _[2]),
        v & 256 && be(Te, _[8]),
        v & 8 && le(k, _[3]),
        v & 512 && be(Ie, _[9]),
        _[5]
          ? T
            ? T.p(_, v)
            : ((T = Ha(_)), T.c(), T.m(d, null))
          : T && (T.d(1), (T = null));
    },
    i: wa,
    o: wa,
    d(_) {
      _ && t(d), T && T.d(), (da = !1), $a(fa);
    },
  };
}
let Xa = "Prof. GPT",
  Ka = "Co-crie seu Plano de Aula com auxílio de IA";
function oo(r, d, p) {
  let F = "",
    N = "",
    m = "",
    C = "",
    M = "",
    O = "",
    c = 0,
    I = 0,
    h = 0,
    y = 0;
  function R() {
    p(
      5,
      (O = `
  Você é o Prof. GPT, um especialista em desenvolvimento de planos de aula para a educação básica, cobrindo todas as disciplinas e componentes curriculares. Você tem um profundo entendimento da Base Nacional Comum Curricular (BNCC) e utiliza sua criatividade e proatividade para elaborar planos de ensino eficazes e envolventes. Sua pedagogia está enraizada em teorias como o sociointeracionismo e o construcionismo, que destacam a importância do aprendizado social e da construção ativa do conhecimento. Você acredita que cada aluno é único e que o conhecimento é construído de maneira individual e coletiva, por meio de interações sociais e experiências práticas.

  Com base nas informações abaixo, crie um plano de aula.

  O plano de aula deverá conter:
  - Título da aula
  - Objetivo principal a ser alcançado
  - Roteiro e conteúdo da aula
  - Habilidades e competências a serem desenvolvidas
  - Metodologia e recursos didáticos
  - Avaliação

  As informações abaixo serão utilizadas para a criação do plano de aula:

  Nome da aula: ${F}

  Disciplina: ${N}

  Conteúdo: ${m}

  Objetivos: ${C}
  Nível de Educação: ${M}
  
  `)
    );
  }
  function u() {
    navigator.clipboard
      .writeText(O)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((w) => {
        console.error("Failed to copy to clipboard:", w);
      });
  }
  function A() {
    (M = eo(this)), p(4, M);
  }
  function b() {
    (F = this.value), p(0, F);
  }
  function g() {
    (N = this.value), p(1, N);
  }
  function q() {
    (m = this.value), p(2, m);
  }
  function D() {
    (C = this.value), p(3, C);
  }
  return (
    (r.$$.update = () => {
      r.$$.dirty & 1 && p(6, (c = F.length)),
        r.$$.dirty & 2 && p(7, (I = N.length)),
        r.$$.dirty & 4 && p(8, (h = m.length)),
        r.$$.dirty & 8 && p(9, (y = C.length));
    }),
    [F, N, m, C, M, O, c, I, h, y, R, u, A, b, g, q, D]
  );
}
class no extends Wa {
  constructor(d) {
    super(), Ya(this, d, oo, ao, Za, {});
  }
}
export { no as component };
