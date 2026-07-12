---
title: 用 MLX 从零实现 Qwen3 推理
description: tiny-llm 课程 Week 1 学习笔记
---

## 课程简介

[tiny-llm](https://skyzh.github.io/tiny-llm/) 是一个专为系统工程师设计的 LLM 推理课程，使用 MLX 在 Apple Silicon 上从零实现 Qwen3 模型的推理。

## Week 1 核心内容

### Attention 机制

注意力机制是 Transformer 的核心。Scaled Dot-Product Attention 的公式：

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

关键步骤：
1. Q 和 K 做矩阵乘法得到 attention scores
2. 除以 $\sqrt{d_k}$ 进行缩放
3. 应用 causal mask
4. softmax 得到注意力权重
5. 与 V 做矩阵乘法得到输出

### RoPE 旋转位置编码

Qwen3 使用 RoPE（Rotary Position Embedding）而不是传统的正弦位置编码。RoPE 通过旋转矩阵将位置信息编码到 Q 和 K 中。

### RMSNorm

与标准 LayerNorm 不同，RMSNorm 去掉了均值中心化步骤，只做方差归一化：

$$\text{RMSNorm}(x) = \frac{x}{\sqrt{\frac{1}{d}\sum_{i=1}^{d} x_i^2 + \epsilon}} \cdot \gamma$$

### GQA 分组查询注意力

Qwen3 使用 GQA，多个 Query 头共享同一组 Key/Value 头，减少 KV Cache 的内存占用。

## 关键代码

```python
import mlx.core as mx

def attention(q, k, v, mask=None):
    d_k = q.shape[-1]
    scores = mx.matmul(q, k.transpose(-2, -1)) / mx.sqrt(d_k)
    if mask is not None:
        scores = scores + mask
    attn = mx.softmax(scores, axis=-1)
    return mx.matmul(attn, v)
```

## 学习心得

通过从零实现这些组件，对 Transformer 和 LLM 推理有了更深入的理解。矩阵操作是所有推理代码的底层语言，掌握张量形状变化是关键。
