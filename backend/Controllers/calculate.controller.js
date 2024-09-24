module.exports.index = (req, res) => {
    const { sal, te, nod } = req.body;

    if (sal < 0) return res.json({ tax: -1 });
    if (te < 0) return res.json({ tax: 0 });
    if (nod < 0) return res.json({ tax: 0 });

    let ti = sal - te - nod * 4000000;

    if (ti <= 0) return res.json({ tax: 0 });

    let tax;
    if (ti > 5000000) {
        if (ti > 10000000) {
            if (ti > 20000000) {
                if (ti > 40000000) {
                    tax = 0.2 * ti - 2250000;
                } else {
                    tax = 0.15 * ti - 750000;
                }
            } else {
                tax = 0.1 * ti - 250000;
            }
        } else {
            tax = 0.05 * ti;
        }
    } else {
        tax = 0.05 * ti;
    }

    res.json({ tax });
}